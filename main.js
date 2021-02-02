function responseHandler(response) {
    //console.log(response)
        response.json().then(
            function (result) {
                console.log(result);
            }
        );
}

function dataReceiverByPromise(){
fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q=back%20to%20the',
{
    'method':'GET',
    'headers': {
        'x-rapidapi-key':'',
        'x-rapidapi-host':'imdb8.p.rapidapi.com'
    }
})
.then(responseHandler)
.catch(
    function (err) {
        console.log(err);
    }
);
console.log('This comes from dataReceiverByPromise');
}

async function dataReceiverByAsync() {
let data = await fetch('https://imdb8.p.rapidapi.com/title/auto-complete?q=back%20to%20the',
{
    'method':'GET',
    'headers': {
        'x-rapidapi-key':'',
        'x-rapidapi-host':'imdb8.p.rapidapi.com'
    }
});
console.log(await data.json());
console.log('This comes from dataReceiverByAsync');
}
dataReceiverByAsync();
dataReceiverByPromise();

//Exercise to understand Promise
/* function test() {
    let data = {};
    setTimeout(function(){data.newInput='YEYYY!'},5000);
    return data;
    
}

console.log(test());

 */

//CallBack reminder
/* 
function greeting(name) {
    alert('Hello ' + name);
    return ('Bruno');
}

console.log(greeting);


function processUserInput(dci) {
var name = prompt('Please enter your name.');
dci(name);
}


processUserInput(greeting);

processUserInput(function (name) {
    alert('Hello ' + name);
    return ('Bruno');
});

processUserInput('Mihály');

 */




let myFirstPromise = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('This is my first promise');
        resolve('This is my first promise');
    },3000);
});

console.log(myFirstPromise);

let mySecPromise = new Promise(function(resolve,reject){
    let userName = prompt('Please type the user name');
    let pass = prompt('Please type the password');
    if (pass == 123) {
        resolve(userName);
    } else {
        reject(pass);
    }
});

console.log(mySecPromise);
mySecPromise
.then(function(data){
    console.log('YEYYYY! ' + data +' is logged in!');
})
.catch(function(err){
    console.log('OPPPSS! ' + err +' is not the correct password!');
})
.finally(function(){console.log('Auth control is over. Now check DOM')});


//
