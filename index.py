from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/getData', methods = ['POST'])
def get_data():
   form = request.form
   form_vals = form.to_dict(flat=False)
   f= open("data.txt","a")
   for x in form_vals['company_detail']:
      f.write("\n")
      f.write(x)
   f.write("\n\n")
   f.close()
   return "Your data is saved in 'data.txt'"

if __name__ == '__main__':
   app.run()
