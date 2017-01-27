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
      console.log('Does this Work:', result)
      let optionValue = result.option
      myCode(optionValue)
    })
    console.log("I'm loaded at content")
    myCode()
  })
})();

//let optionValue = 'aaa'
// chrome.extension.onMessage.addListener( (request, sender, sendResponse) => {
//   optionValue = request.option
// })

function myCode(optionValue) {

  let count = 0

  const avoidMe = [
      'SCRIPT',
      'NOSCRIPT',
      'STYLE',
      'IFRAME'
    ]

  const vowels = [
    'a', 'A',
    'e', 'E',
    'i', 'I',
    'o', 'O',
    'u', 'U'
  ]

  const recursiveSelect = (node, callback) => {
    //count++
    if(count < 200){
      console.log(    count    )
      if(!avoidMe.includes(node.tagName) && node.childNodes.length === 0) {
        callback(node)
      }
      node.childNodes.forEach( nodeElement => {
        recursiveSelect(nodeElement, callback)
      })
    }
  }

  const merger = ( node ) => {
    let nd = $(node)[0]
    console.log(nd.data)
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

  // $(node)[0].data = '<img src=http://popsop.com/wp-content/uploads/get_some_nuts_snickers.jpg >'

  const embarrassing = ( node ) => {
    $(node)[0].data = 'Embarrassing!'
  }

  //$(node)[0].data.replace(/a/g, )

  recursiveSelect(document.body, node => {
    const functionCall = {
      'merger': merger,
      'aaa': aaa,
      'embarrassing': embarrassing,
      'theAnswer': theAnswer,
      'off': (passMe => {})
    }
    functionCall[ optionValue ](node)
    //merger(node)
  })

}
