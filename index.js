// const axios = require('axios');

// axios 
// .get('http://google.com')
// .then(function(respone){
//     console.log(respone);

// })
// .catch(function(error){
//     console.log(error);
// });

const myBox = document.querySelector('.box');
const button = document.querySelector('.circle');

button.addEventListener('click',() => {
    myBox.setAttribute('style' , 'border-radius:50%');
}
)
