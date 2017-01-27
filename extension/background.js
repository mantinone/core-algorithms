
var optionValue = "aaa"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.request === 'feedMe'){
    sendResponse({option: optionValue})
  } else if(request.request === 'setMe'){
    optionValue = request.option
  }
})
