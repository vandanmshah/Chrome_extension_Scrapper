function post(path, params, method) {
    method = "post";
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "_blank");
    for (var i = params.length - 1; i >= 0; i--) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", 'detail');
        hiddenField.setAttribute("value", params[i]);
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
}
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        var companyDetails = [];
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var name = document.getElementsByClassName('video-player')[0].getElementsByTagName('iframe')[0].id;
        var src = document.getElementsByClassName('video-player')[0].getElementsByTagName('iframe')[0].src;
        var subs = document.getElementsByClassName('wrapper-download-transcripts')[0].getElementsByTagName('a')[0].href;
        companyDetails.push(src);
        companyDetails.push(subs);
        companyDetails.push(name);
        post('http://127.0.0.1:5000/getData', companyDetails);
    }
});