let $display = document.querySelector('.display');
let $number = document.querySelector('.number');
let $btn = document.querySelector('button');

$display.style.color = 'red';

function numberOneTriangle(n) {
  let render = '';
  let text = '';
  for (let i = 1; i <= n; i++) {
    text += '*';
    render += `<div>${text}</div>`;
  }
  $display.innerHTML = render;
}

$btn.addEventListener('click', function () {
  let n = Number($number.value);
  console.log(Number.isInteger(n));
  if (n >= 1 && n <= 10 && Number.isInteger(n)) {
    numberOneTriangle(n);
  } else {
    text = 'Số không hợp lệ';
    $display.innerHTML = text;
  }
});

//numberOneTriangle(6);
