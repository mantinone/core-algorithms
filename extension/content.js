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
    console.log("I'm loaded at content")
    myCode()
  })
})();

function myCode() {
  /*const avoidMe = [
    'SCRIPT',
    'NOSCRIPT',
    'STYLE',
    'IFRAME'
  ]
  let counter = 0
  let resultArray = $('html *')
  for( let jele in resultArray ) {
    counter++
    if(!avoidMe.includes(resultArray[jele].tagName) 
      && resultArray[jele].innerText !== undefined
      //&& resultArray[jele].text !== ""
      // && /\w/.test(resultArray[jele])
      ){
        //console.log(resultArray[jele][0])
        if(resultArray[jele][0]){
          resultArray[jele][0].innerText = 'a'
        }
      resultArray[jele].text = 'a'
      //console.log("I am a:", resultArray[jele].tagName, "myText: ", resultArray[jele].innerText)  
    }
     resultArray[jele].text = 'a'
    
    //if(counter > 100) break;
  }

  //$('#innerpagecontentcommon')
  */

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
      'sort': merger,
      'A': aaa,
      'embarrassing': embarrassing,
      'TheAnswer': theAnswer,
      'off': (passMe => {})
    }
    console.log()
    functionCall[ localStorage.getItem('method') ](node)
  })

}
