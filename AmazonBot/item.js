let searches = ["Drone","Iphone","Samsung","Video card","MacBook","Gift card Amazon",'kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];
let websitesURL = ["https://www.bestbuy.com/?intl=nosplash","https://www.wikipedia.org/","https://tomklingenstein.com/","https://www.bbc.com/"]
var tryy = 0;
var currentUrl = window.location.href;
var parts = currentUrl.split('/');
firstPart = parts[2];
// Send message to background script
//chrome.runtime.sendMessage({ action: 'storeVariable', variableValue: firstPart });
console.log("url send");

function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function generateRandomLim(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    async function itemFun() {
    
    console.log("start from item page");
    await sleep(2000);
    
    //try size dropdown
    try {
      if(tryy == 0){
        tryy = 1;
        console.log("finding the color choseer");
        var category = document.evaluate('/html/body/div[4]/div/div[3]/div[10]/div[36]/div[1]/div/form/div/ul/li[2]/span/div/span/span/span/button', document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        await sleep(1000);
        category.click();  //the color chose one
        
      }
    }catch (error){console.log(error)};
        

    //try count dropdown
    console.log("value of tryy is: ",tryy);
    try {
        if(tryy == 0) {
        tryy == 1;
        console.log("finding count");
        var category = document.evaluate('/html/body/div[1]/div/div[9]/div[3]/div[4]/div[35]/div[1]/div/form/div[2]/span/span/span/span/span/span',document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
        await sleep(2000);
        category.click() //dropdown select
        var dropSel = document.querySelector("#native_dropdown_selected_unit_count_1")
        dropSel.click()
        
        }
    }catch (error){console.log(error)};
        
        console.log("waiting 5 sec");
        await sleep(5000);
        console.log("Done sleepin")
        for (var i = 0; i < 3000; i=i+200) {
          console.log("scroll");
          window.scrollBy(0,150);
          console.log(i);
          await sleep(generateRandomLim(100,250));
        }

        for (var i = 0; i < 3000; i=i+200) {
          window.scrollBy(0,-150);
          await sleep(generateRandomLim(100,250));
        }
        
        console.log("clickg random pics on side");
         // side pictures
         try {
          var select = document.evaluate('//*[@id="a-autoid-3"]/span/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          await sleep(2000);
          select.click();
          await sleep(2000);
          var select = document.evaluate('//*[@id="a-autoid-5"]/span/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          select.click();
          await sleep(3000);
          console.log("Done the images");
          
         } catch (error) {
          console.log(error);
          
         }
         for (var i = 0; i < 8000; i=i+200) {
          window.scrollBy(0,150);
          await sleep(generateRandomLim(100,250));
        }
        console.log("finding helpful");

        try {
          console.log("helpfulll");
          await sleep(2000);
          var helpfull = document.evaluate(`/html/body/div[1]/div/div[3]/div[30]/div/div/div/div/div[2]/div/div[2]/span[2]/div/div/div[3]/div[3]/div/div[1]/div/div/div[5]/span[1]/div`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          var h = helpfull.querySelector('a')
          h.click();
          var helpfull = document.evaluate(`/html/body/div[1]/div/div[3]/div[30]/div/div/div/div/div[2]/div/div[2]/span[2]/div/div/div[4]/div[3]/div/div[1]/div/div/div[5]/span[1]/div`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          await sleep(1000);
          var h = helpfull.querySelector('a')
          h.click();
          await sleep(500);


          
        } catch (error) {
          console.log(error);
          
        }
        console.log("number wasnt 1")
        window.scroll(0,-10000);
        // input stuff
        for (var i = 0; i < 10000; i=i+500) {
          window.scrollBy(0,-150);
          await sleep(generateRandomLim(100,250));
        }
        var select = document.querySelector("#twotabsearchtextbox") //searching input
      //chosing which one to search in amazon
      console.log("Search Input found")
      select.value = "";
      let ser = searches[generateRandom(searches.length)];
      console.log("random ser: ",ser);
      var num = generateRandomLim(0,websitesURL.length)
      var visitWeb = websitesURL[num];
      var guess = generateRandomLim(1,3);
      if(guess == 2) {
        console.log("going to website: ",visitWeb);

        
         
        // Navigate to another website
        window.location.href = visitWeb;

      }
      console.log("number was: ",guess," not 2 so didnt goto website");
      for (let i = 0; i < ser.length; i++) {
        if (i == 3) {
            select.value += "x"
            await sleep(generateRandomLim(1000,5000));
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[2];
        }

        if (i == 5) {
            select.value += "q"
            await sleep(1500);
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[4];
        }
        select.value += ser[i];
        await sleep(generateRandomLim(1000,5000));
        console.log(ser[i]);
    }
    //search button
    await sleep(generateRandomLim(1000,5000));
    var Sbutton = document.querySelector("#nav-search-submit-button");
    await sleep(2000);
    Sbutton.click();
    console.log("Done");

   


    console.log("item page done");
    };

    itemFun();
