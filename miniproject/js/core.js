var wrap = document.querySelector('.stable');
var first_step = document.querySelector('.first-step');
var go_back = document.querySelector('.go-back');

first_step.onclick = firstStepFn ;

function firstStepFn() {
  wrap.classList.add('grow');
}

go_back.onclick = goBackFn ;

function goBackFn() {
  wrap.classList.remove('grow');
}
