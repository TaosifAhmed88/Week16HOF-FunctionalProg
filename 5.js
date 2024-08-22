let validpatternurl = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]{2,})+$/gi ;

function checkingurlisvalid(input){
    return validpatternurl.test(input)
    
}

let url ='https://www.pwskills.com';

if(checkingurlisvalid(url)){
    console.log(`${url} is a valid URL`);
}else{
    console.log(`${url} is not a valid URL`);
}



