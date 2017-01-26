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
    console.log("I'm loaded")
    myCode()
  })
})();

function myCode() {
  const avoidMe = [
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
}
