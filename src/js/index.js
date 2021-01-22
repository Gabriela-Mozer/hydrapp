import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')


const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector ('.button__add--js');
const buttonDel = document.querySelector ('.button__del--js');
const key = new Date().toISOString().slice(0,10);

const localStorageValue = localStorage.getItem(key);
if (localStorageValue){
    currentGlassCounter = localStorageValue;
}else{
    localStorage.setItem(key, 0);
}
glassCounter.innerHTML = currentGlassCounter;

let currentGlassCounter = 0;
buttonAdd.addEventListener('click', () =>{
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
});

buttonDel.addEventListener('click', () =>{
    if(currentGlassCounter > 0){
       currentGlassCounter--; 
    }
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key,currentGlassCounter );
});


// if(key = '')