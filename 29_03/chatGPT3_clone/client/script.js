import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form');
const chatcontainer = document.querySelector('#chat_container');

//loading ... ///////////////////////////////////////////////////////////////////
let loadinterval;
function loader(element) {

  element.textContent = '';

  loadinterval = setInterval(() => {
    element.textContent += '.';

     if(element.textContent === '....'){
      element.textContent = '';
     }
  },300)
}

//Result text print word by word ///////////////////////////////////////////////////////////////////
function typeText(element, text){
  let index = 0;
  let interval = setInterval(()=>{
    if(index < text.length){
      element.innerHTML += text.charAt(index);
      index++;
    } else{
      clearInterval(interval);
    }
  }, 20)
}

//genrate uniqueID every answer ///////////////////////////////////////////////////////////////////
function generateUniqieId(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `Id - ${timestamp}-${hexadecimalString}`;
}

//icon uman / AI ///////////////////////////////////////////////////////////////////
function charStripe (isAi, value, uniqueID) {
  return(`
  <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
        <div class="profile">
          <img 
           src="${isAi ? bot : user}"
           alt="${isAi ? 'bot' : 'user'}"
           />
        </div>
        <div class="message" id="${uniqueID}>${value}">
        </div>
      </div>
    </div>
  `)
}

//handel AI generated response ///////////////////////////////////////////////////////////////////
const handelSubmit = async (e) =>{
  e.preventDefault();

  const data =  new FormData(form);

  //user's chat strips ///////////////////////////////////////////////////////////////////
  chatcontainer.innerHTML += charStripe(false, data.get('prompt')); 

  form.reset();

  //bot's chat strips ///////////////////////////////////////////////////////////////////
  const uniqueID = generateUniqieId();
  chatcontainer.innerHTML += charStripe(true, " ", uniqueID); 
}
