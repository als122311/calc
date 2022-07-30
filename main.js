// alert("Привет!!!");

// let name = "George";
// alert("Привет " + name);
// let age = 10;
// alert("Возраст " + age);
// let human = {};
// human.name = "Юрий";
// human.age = 45;
// human.legs = 2;
// human.ears = 2;
// alert(human.name + human.age + human.legs);
// human.name = "George";
// human.age = 10;
// human.legs = 3;
// human.ears = 1;
// alert(human.name + human.age + human.legs);

// numbers
let display = document.querySelector(".lol1");
let zero = document.querySelector("#zero")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
// signs
let plus = document.querySelector("#plus")
let clear = document.querySelector(".clear")
let equal = document.querySelector(".equal")
let minus = document.querySelector("#minus")
let multyply = document.querySelector("#multyply")
let devide = document.querySelector("#devide")
let point = document.querySelector("#point")
zero.addEventListener("click", function () {
    if (display.value == "0") display.value = "0"
else display.value = display.value + '0'
});

five.addEventListener("click", function () {
    if (display.value == "0") display.value = "5"
else display.value = display.value + '5'
});

six.addEventListener("click", function () {
    if (display.value == "0") display.value = "6"
else display.value = display.value + '6'
});

seven.addEventListener("click", function () {
    if (display.value == "0") display.value = "7"
else display.value = display.value + '7'
});

eight.addEventListener("click", function () {
    if (display.value == "0") display.value = "8"
else display.value = display.value + '8'
});

nine.addEventListener("click", function () {
    if (display.value == "0") display.value = "9"
else display.value = display.value + '9'
});

three.addEventListener("click", function () {
    if (display.value == "0") display.value = "3"
else display.value = display.value + '3'
});

four.addEventListener("click", function () {
    if (display.value == "0") display.value = "4"
else display.value = display.value + '4'
});

one.addEventListener("click", function () {
    if (display.value == "0") display.value = "1"
  else display.value = display.value + '1'
});
  
two.addEventListener("click", function () {
    if (display.value == "0") display.value = "2"
    else display.value = display.value + '2'
 });
     
 clear.addEventListener("click", function () {
display.value = '0'
 });

 plus.addEventListener("click", function () {
     display.value = display.value + '+';
 });

 equal.addEventListener("click", function () {
    display.value = eval(display.value);
    // equal.style.transform = "scale(0.95)";
});

minus.addEventListener("click", function () {
    display.value = display.value + '-';
});

devide.addEventListener("click", function () {
    display.value = display.value + '/';
});

multyply.addEventListener("click", function () {
    display.value = display.value + '*';
});

point.addEventListener("click", function () {
    display.value = display.value + ',';
});