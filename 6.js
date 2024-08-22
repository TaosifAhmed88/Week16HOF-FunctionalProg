let validpatternlinkedinurl = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/g

function checkinglinkedinurl (input){
    return validpatternlinkedinurl.test(input)
}

let url = 'https://www.linkedin.com/in/taosif-ahmed' ;

if(checkinglinkedinurl(url)){
    console.log(`${url} is a valid URL`);
}else{
    console.log(`${url} is not a valid URL`);
}