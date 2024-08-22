let delay = 3;

let intervalid = setInterval(function (){
    if (delay > 0){
        console.log(`Time Remaining: ${delay} seconds`);
        delay--; 
    }else{
        clearInterval(intervalid)
        setTimeout(function (){
            let randomnumber = Math.ceil(Math.random() * 1000)
            console.log(`Generated Random Number: ${randomnumber}`);
            
        },0)
    }
},1000)