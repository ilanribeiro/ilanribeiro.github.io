
let counter = 0;
let images = document.querySelectorAll('.img');
let showPass = document.querySelector('.showHide')
const userInput = document.querySelector('.userInput');
const userValue = userInput.value;


showPass.setAttribute('hidden', true)

const showImages = (n) => {
  images[n].style.display = 'block';
}

showImages(counter);

const imageDisplay = () => {
  images[counter].style.display = 'none';
  
  counter++  
  
  if (counter === images.length) {
    counter = 0;
  }

  images[counter].classList.add('fader');

  showImages(counter);
}

setInterval(imageDisplay, 5000);

const userField = ({target}) => {
  const userLabel = document.querySelector('.userLabel');
  const lengthUser = target.value.length;
  
  if (lengthUser === 0) {
    userLabel.style.transform = "translateY(0px) scale(1, 1)";
  }
  if (lengthUser > 0) {
    userLabel.style.transform = "translateY(-10px) scale(0.8, 0.8)";
  }
}

const passField = ({target}) => {
  const passLabel = document.querySelector('.passLabel');
  const lengthPass = target.value.length;
  
  if (lengthPass === 0) {
    passLabel.style.transform = "translateY(0px) scale(1, 1)";
    showPass.setAttribute('hidden', true)
  }
  if (lengthPass > 0) {
    passLabel.style.transform = "translateY(-10px) scale(0.8, 0.8)";
    showPass.removeAttribute('hidden')
  }

  loginActive();
}

const loginActive = () => {
  const user = document.querySelector('.userInput');
  const pass = document.querySelector('.passInput');
  const loginBtn = document.querySelector('.loginBtn');
  const limit = 5;
  
  const userNoExist = user.value.length === 0;
  const passNoExist = pass.value.length === 0;

  const userValid = user.value.length > limit;
  const passValid = pass.value.length > limit;
  

  if (userNoExist || passNoExist) {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '#0094f669';
    loginBtn.style.cursor = 'default';
  }

  if (userValid && passValid) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#0094f6';
    loginBtn.style.cursor = 'pointer';
  }
}

const handleClick = (event) => {
  event.preventDefault()
  const userInput = document.querySelector('.userInput');
  const userValue = userInput.value;
  return alert `Olá, você acabou de fazer login`
}
