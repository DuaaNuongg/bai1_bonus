//1.Toán tử ba ngôi 
const x = 100;
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result);

//2.Shorthand Evaluated 
const variable1 = null;
const variable2 = variable1 || "";
console.log(variable2);

//3.Variable declaration - If Comparison
let a, b, c = 3;

const isTurnOn = true;
if (isTurnOn) {
    console.log("Thiết bị đang bật");
}

//4.For loop - For loop with decimal base
const sampleArr = [1, 2, 3];
for (let i = 0; i < sampleArr.length; i++) {
    console.log(sampleArr[i]);
}

for (let item in sampleArr) {
    console.log(item);
}

for (let i = 0; i < 1e3; i++) {} // chạy 1000 lần
console.log("Hoàn tất vòng lặp 1e3");

//5.Object property
const x1 = 1, y1 = 2;
const obj = { x1, y1 };
console.log(obj);

//6.Rút gọn định nghĩa function
const sayHello = name => console.log("Hello", name);
sayHello("Hương");

setTimeout(() => console.log("Loaded"), 2000);

const list = ["Táo", "Cam", "Chuối"];
list.forEach(item => console.log(item));

const getValue = ratio => ratio * 6.9;
console.log(getValue(2));

//7.Set default value for parameter in function
const calculate = (a, b = 3, c = 4) => (a * b + c);
console.log(calculate(2)); // 2 * 3 + 4 = 10