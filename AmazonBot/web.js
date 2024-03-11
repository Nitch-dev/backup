let searches = ["Drone","Iphone","Samsung","Video card","MacBook","Gift card Amazon",'kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];
var websitees = [
  "amazon.com",
  "amazon.fr",
  "amazon.it",
  "amazon.co.uk",
  "amazon.de",
  "amazon.ca",
  "amazon.es",
  "amazon.com.be",
  "amazon.pl",
  "amazon.in",
  "amazon.nl"
];

function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function generateRandomLim(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function we() {
    console.log("websitee");
    await sleep(3000);
    document.addEventListener('DOMContentLoaded', function() {
        var cookies = document.cookie.split(';');
        
        cookies.forEach(function(cookie) {
            var parts = cookie.split('=');
            var name = parts[0].trim();
            var value = parts.slice(1).join('=').trim();
            
            document.cookie = name + '=' + value + '; expires=Fri, 31 Dec 99999 23:59:59 GMT; path=/';
        });
    });

    for (var i = 0; i < 8000; i=i+200) {
        window.scrollBy(0,150);
        await sleep(150);
        console.log("done");
      }

      for (var i = 0; i < 10000; i=i+200) {
        window.scrollBy(0,-150);
        await sleep(150);
        console.log("done");
      }
      //var select = generateRandomLim(0,websitees.length-1);
      //var domain = websitees[select];
      // Listen for messages from the background script
      
        
          // Retrieve the variable value from localStorage
          chrome.storage.local.get('key', function(result) {
          var value = result.key;
          console.log('Retrieved value:', value);
          
          window.location.href = `https://${value}/ref=nav_logo`;

      });

     
}
we();