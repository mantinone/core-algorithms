
var optionValue = "aaa"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.request === 'feedMe'){
    sendResponse({option: optionValue})
  }
  if(request.request === 'setMe'){
    optionValue = request.option

  }
  // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  //
  //   //chrome.tabs.sendMessage(tabs[0].id, request.option)
  // })
});
