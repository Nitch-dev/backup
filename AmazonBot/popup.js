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

  var valid = 0;

  function generateRandomLim(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('DOMContentLoaded', function listnerFunc() {
    var mainDiv = document.getElementById("main");
    mainDiv.style.display = "none";
    var inputCheckKey = document.querySelector(".keyCheck");
    enteredData = inputCheckKey.value;
    var theKey = localStorage.getItem("theKey");
    if(theKey.length < 0) {
        console.log("confirm key is not there");
        main();
    }
    else if(theKey.length > 0) {
        inputCheckKey.value = theKey;
        var btn = document.querySelector(".ValidateKey");
        btn.click();
    }

    // Function to handle button click
    function handleClick(event) {
        //var searchInput = document.getElementById('searchInput');
        //inputQuery = searchInput.value.trim();

        var domain = event.target.id; // Get the ID of the clicked button
        var Surl = 'https://www.' + domain + '/';
        console.log(Surl);
        chrome.runtime.sendMessage({ action: 'storeVariable', variableValue: Surl });

        chrome.tabs.update({ url: Surl });
    
        // Inject the content script into the YouTube page
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log("above yt.js");
            chrome.tabs.executeScript(tabs[0].id, { file: 'yt.js'});
            
        });
    }

    function stop() {
        //send message to bg script so tht it knows it stopped
        chrome.runtime.sendMessage({ action: 'stopCheck', variableValue: "stop" });
        chrome.storage.local.get('key', function(result) {
            var dummy = ' '
            var value = result.key;
            console.log('Retrieved value:', value);
            
            chrome.tabs.update({ url: value });
        });
        
    }

    function start() {
        chrome.runtime.sendMessage({ action: 'start', variableValue: "null" });
    }
    // Add event listener to button
    var buttons = document.querySelectorAll('.amazon-button');
    var stopButton = document.querySelector(".stop");
    var startButton = document.querySelector(".start")
    if(stopButton) {
        stopButton.addEventListener('click',stop);
    }
    startButton.addEventListener('click',start);
    buttons.forEach(function(button) {
        button.addEventListener('click', handleClick);
    });
    
});

document.querySelector(".ValidateKey").addEventListener('click',function main() {
    console.log("runnin");
    var enteredData;
    var inputCheckKey = document.querySelector(".keyCheck");
    console.log(inputCheckKey.value);
    enteredData = inputCheckKey.value;
    localStorage.setItem("theKey", enteredData);
    

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://ouoiuouoiuoiuoiu.000webhostapp.com/query.php");
        console.log("Send Query");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            console.log("in here")
            var parts = xhr.responseText.split('{');
            var jsonResponse = JSON.parse('{' + parts[1]);
            var status = jsonResponse.status;
            console.log(status);
            if (status === "ok") { 
                var mainDiv = document.getElementById("main");
                alert("Key Valid!!");
                mainDiv.style.display = "block";
            }
            else {
                var mainDiv = document.getElementById("main");
                alert("Key is not Valid!! Please Try Again..")
                mainDiv.style.display = "none"; //still hide it 
            }

        }
        console.log("sending: ",enteredData);
        xhr.send("query=" + encodeURIComponent(enteredData));
});
