let searches = ["Drone","Iphone","Samsung","Video card","MacBook","Gift card Amazon",'kindle', 'amazon echo show', 'playstation 4','coffee maker','pampers'];
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


  async function dee() {
    console.log("dee");
    var cookies = document.cookie.split(';');
      
    cookies.forEach(function(cookie) {
        var parts = cookie.split('=');
        var name = parts[0].trim();
        var value = parts.slice(1).join('=').trim();
        
        document.cookie = name + '=' + value + '; expires=Fri, 31 Dec 99999 23:59:59 GMT; path=/';
    });
try {
    for (var i = 0; i < 5000; i=i+200) {
      window.scrollBy(0,150);
      await sleep(generateRandomLim(100,250));
    }
    await sleep(generateRandomLim(1000,4000));
    window.scrollBy(0,-50000);
    await sleep(2000);

    console.log("Searchin");


} catch (error) {
    console.log(error);
    
}

try {
    // input stuff
    var select = document.querySelector("#twotabsearchtextbox") //searching input
    //chosing which one to search in amazon
    console.log("Search Input found");
    select.value = "";
    let ser = searches[generateRandom(5)];
    for (let i = 0; i < ser.length; i++) {
        if (i == 3) {
            select.value += "x"
            await sleep(generateRandomLim(1000,3000));
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[2];
        }

        if (i == 5) {
            select.value += "q"
            await sleep(generateRandomLim(1000,3000));
            select.value = "";
            for(let j=0;  j < i-1; j++){ 
            select.value +=ser[j]
            
            console.log(j);
            };
            select.value += ser[4];
        }
      
      select.value += ser[i];
      await sleep(generateRandomLim(250,1000))
      console.log(ser[i]);
  }
  //search button
  await sleep(3000);
  var Sbutton = document.querySelector("#nav-search-submit-button");
  await sleep(2000);
  Sbutton.click();
  console.log("Done");
   
} catch (error) {
   console.log(error)
}
  }
dee();