let optionSelection = document.getElementById('options')

optionSelection.addEventListener('change', _ => {
  chrome.extension.sendMessage({option: optionSelection.value, request: 'setMe'})
})

window.addEventListener('load', _ => {
  chrome.extension.sendMessage({request: 'feedMe'}, result => {
    optionSelection.value = result.option
  })
})
