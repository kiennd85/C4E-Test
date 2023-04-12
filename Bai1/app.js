function total(a, b) {
  //Lấy các phần từ khoảng a đến b
  let arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  console.log(arr);

  //Kiểm tra số nào là số nguyên tố
  let newArr = [];

  arr.forEach(function (n) {
    ck = 1;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        ck = 0;
      }
    }
    if (ck == 1) {
      newArr.push(n);
    }
  });

  console.log(newArr);
  //Tính tổng các số nguyên tố
  let total = 0;
  newArr.forEach(function (n) {
    total += n;
  });

  console.log(total);
  return total;
}

//let a = 20;
//let b = 50;
// let numberA = Number(prompt('Nhập số A: '));
// let numberB = Number(prompt('Nhập số B: '));

let $numberA = document.querySelector('.numberA');
let $numberB = document.querySelector('.numberB');
let $btn = document.querySelector('button');
let $display = document.querySelector('.display');

//console.log($numberA, $numberB);

$btn.addEventListener('click', function () {
  let numberA = Number($numberA.value);
  let numberB = Number($numberB.value);

  if (numberB < numberA) {
    let text = 'Số B phải lớn hơn số A';
    $display.innerHTML = text;
  } else {
    console.log(numberA, numberB);
    let totalAB = total(numberA, numberB);
    console.log(totalAB);
    $display.innerHTML = totalAB;
  }
});
