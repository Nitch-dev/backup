
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'storeVariable') {
     // Save data to storage
        chrome.storage.local.set({ key: message.variableValue }, function() {
            console.log(message.variableValue);
            
        }); 
    }
  });
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action === 'stopCheck') {
      // Save data to storage
      chrome.storage.local.set({ 's': "stop" }, function() {
        console.log('Data stored successfully');
    });
     }
    });
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'isitStop') {
      console.log("checking for the key value");
      console.log(message.variableValue)

        chrome.storage.local.get('s', function(data) {
          console.log(data['s'])
            var value = data['s'] // Access the value from storage
            // Send response to content script
            console.log("the value we got from database is: ",value)
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'storageValueChecked', value: value });
            });
        });

    }
  });
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'start') {
        chrome.storage.local.remove('s', function() {
          console.log('Data removed successfully');
      });
    }
  });