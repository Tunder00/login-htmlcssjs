const passwordInput = document.getElementById('Pass');
const toggleButton = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const emailInput = document.getElementById('email');
const warnContainer = document.getElementById('warning-container');
const warnMessage = document.getElementById('warn');

toggleButton.addEventListener('click', function () {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

  if (isPassword) {
    eyeIcon.setAttribute('src', './images/close_eye.svg');
  } else {
    eyeIcon.setAttribute('src', './images/open_eye.svg');
  }
});

function login(){
    const eval = emailInput.value;
    const pval = passwordInput.value;
    
    if (eval === "" || pval === ""){
        warnMessage.textContent = "please fill in all fields.";
        warnMessage.className = "msg-info";
        warnContainer.className = "warningmessage-open";
        return;
    }
    if (eval === 'kalyan' && pval === '123'){
        warnMessage.textContent = "login success.";
        warnMessage.className = "msg-success";
        warnContainer.className = "warningmessage-open";
        return;
    } else {
        warnMessage.textContent = "invalid username/password.";
        warnMessage.className = "msg-error";
        warnContainer.className = "warningmessage-open";
        return;
    }
}

function closeWarn(){
    warnContainer.className = "warningmessage-close"
}