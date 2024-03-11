let searches = ["Drone","Iphone","Samsung","Video card","MacBook","Gift card Amazon",'kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];
function generateRandom(maxLimit = 5){
    let rand = Math.random() * maxLimit;
    console.log(rand); 
  
    rand = Math.floor(rand); 
  
    return rand;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function resetPage() {
    console.log("reset");
    try {
        var category = document.querySelector(".ewc-delete-icon")
        category.click()
        
    } catch (error) {
        console.log(error)
    }


    try {
        var category = document.querySelector(".a-link-nav-icon")
        category.click()
        
    } catch (error) {
        console.log(error)
    }

try {
        //todaYDEALS explores
        var Deal = document.evaluate('/html/body/div[1]/header/div/div[4]/div[2]/div[2]/div/a[1]', document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        await sleep(2000);
        Deal.click()

        var d = document.evaluate('//*[@id="anonCarousel1"]/ol/li[3]/a',document,null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        await sleep(1000);
        d.click(); 
        await sleep(2000);
    
} catch (error) {
    console.log(error)
    
}

   
    
}

resetPage();
