// Load jQuery and run myCode() after loaded
;(function () {
  function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript"
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null
          callback()
        }
      }
    } else { //Others
      script.onload = function () {
        callback()
      }
    }
    script.src = url
    document.getElementsByTagName("head")[0].appendChild(script)
  }

  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
    chrome.extension.sendMessage({request: 'feedMe'}, (result) => {
      let optionValue = result.option
      myCode(optionValue)
    })
  })
})();

function myCode(optionValue) {
  const avoidMe = [
      'SCRIPT',
      'NOSCRIPT',
      'STYLE',
      'IFRAME'
    ]

  const recursiveSelect = (node, callback) => {

      if(!avoidMe.includes(node.tagName) && node.childNodes.length === 0) {
        callback(node)
      }
      node.childNodes.forEach( nodeElement => {
        recursiveSelect(nodeElement, callback)
      })
  }

  const merger = ( node ) => {
    let nd = $(node)[0]
    if( nd.data ){
      let split = nd.data.split("")
      nd.data = mergeSort(split).join("")
    }
  }

  const aaa = ( node ) => {
    $(node)[0].data = 'AAAAAAAAAAAA'
  }

  const theAnswer = ( node ) => {
    $(node)[0].data = '42'

  }

  const embarrassing = ( node ) => {
    $(node)[0].data = 'Embarrassing!'
  }

  const fizzBuzz = ( node ) => {
    let nd = $(node)[0]
    if(nd.data){
      let str = nd.data
      let fzz = str.replace(/[aeiou]{1,10}/g, 'fizz')
        .replace(/[bcdghjklmnpqrstvwx]{1,10}/g, 'buzz')
        .replace(/[y]{1,10}/g, 'FIZZBUZZ')
      $(node)[0].data = fzz
    }
  }

  recursiveSelect(document.body, node => {
    const functionCall = {
      'merger': merger,
      'aaa': aaa,
      'embarrassing': embarrassing,
      'theAnswer': theAnswer,
      'fizzBuzz': fizzBuzz,
      'off': (passMe => {})
    }
    functionCall[ optionValue ]( node )
  })
}
