// Wait for the entire page to load

function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function main() {
    console.log("Start");
    document.addEventListener('DOMContentLoaded', function() {
      var cookies = document.cookie.split(';');
      
      cookies.forEach(function(cookie) {
          var parts = cookie.split('=');
          var name = parts[0].trim();
          var value = parts.slice(1).join('=').trim();
          
          document.cookie = name + '=' + value + '; expires=Fri, 31 Dec 99999 23:59:59 GMT; path=/';
      });
  });
  console.log("all cookies loded")  
    var number = generateRandom(5);
    await sleep(3000); // Sleep for 2 seconds
    var elements = document.querySelectorAll(".a-offscreen");
    console.log(elements);
    await sleep(3000);
    for (var i = 0; i < 1000; i=i+100) {
      window.scrollBy(0,150);
      await sleep(generateRandom(200,300));
    }
    try {
         elements[number].click(); //clcik any elemnt in search menu
        console.log();
        } catch (error) {
          console.log(error);
        };
    console.log("Done");
   
  }

//check if there is stp button pressed if yes dont execute this 
chrome.runtime.sendMessage({ action: 'isitStop', variableValue: "stop" });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'storageValueChecked') {
    var value = message.value;
    console.log("message has came",value)
    if(value !== 'stop') {
        main();
      }

  }
});


