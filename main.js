// 1-masala
function sanash(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }
    return count;
}
console.log(sanash("banana"));

// 2-masala
function boshjoy(str) {
    return str.trim("");
}
console.log(boshjoy("   salom   "));

// 3-masala
function teskari(str) {
    return str.split('').reverse().join('');
}
console.log(teskari("salom"));

// 4-masala
function hisobsoz(str) {
    return str.split(' ').length;
}
console.log(hisobsoz("Bugun havo yaxshi"));

// 5-masala
function gmail(password) {
    return password.includes('@');
}
console.log(gmail("my@password"));

// 6-masala
function qisqaism(fullname) {
    let nom = fullname.split(' ');
    let name = nom[0];
    let familiya = nom[1];
    return name[0] + ". " + familiya;
}
console.log(qisqaism("Ali Valiyev"));

// 7-masala
function faqatraqam(str) {
    return parseInt(str);
}
console.log(faqatraqam("150px"));

// 8-masala
function butunqism(str) {
    return parseFloat(str);
}
console.log(butunqism("12.5kg"));

// 9-masala
function aniqqiymat() {
    let sum = 0.1 + 0.2;
    return parseFloat(sum.toFixed(1));
}
console.log(aniqqiymat());

// 10-masala
function raqambutun(num) {
    return Number.isInteger(num);
}
console.log(raqambutun(5));

// 11-masala
function raqammi(value) {
    if (isNaN(value)) {
        return "Bu NaN (Raqam emas)";
    } else {
        return "Bu haqiqiy raqam";
    }
}
console.log(raqammi("abc"));

// 12-masala
// shuni qila olmadim
// 13-masala
function massiv(obj) {
    return Object.keys(obj);
}
console.log(massiv({name: "Ali", age: 25}));

// 14-masala
function qiymat(obj) {
    return Object.values(obj);
}
console.log(qiymat({name: "Ali", age: 25}));

// 15-masala
function keyqiymat(obj) {
    return Object.entries(obj);
}
console.log(keyqiymat({name: "Ali", age: 25}));

// 16-masala
function seperrator(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(seperrator({a: 1}, {b: 2}));

// 17-masala
function muzlagan(obj) {
    return Object.isFrozen(obj);
}
const muz = Object.freeze({a: 1});
console.log(muzlagan(muz));

// 18-masala
function yangiobj(key, value) {
    let yangiOb = Object.create(null);
    yangiOb[key] = value;
    return yangiOb;
}
console.log(yangiobj("name", "Vali"));

// 19-masala
function qoshish(arr, qiykat) {
    arr.push(qiykat);
    return arr;
}
console.log(qoshish([1, 2, 3], 4));

// 20-masala
function engkatta(arr) {
    let bignum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > bignum) {
            bignum = arr[i];
        }
    }
    return bignum;
}
console.log(engkatta([5, 12, 8, 3]));

// 21-masala
function musbatson(arr) {
    return arr.filter(num => num > 0);
}
console.log(musbatson([-5, 10, -2, 8]));

// 22-masala
function ikkikarra(arr) {
    return arr.map(num => num * 2);
}
console.log(ikkikarra([2, 4, 6]));

// 23-masala
//buni qilib yangilab qoyaman 
// 24-masala
function massivlar(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(massivlar([1, 2], [3, 4]));

// 25-masala
function revers(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(revers([1, 2, 3, 4]));

// 26-masala
function borliginitekshir(arr, element) {
    return arr.includes(element);
}
console.log(borliginitekshir([10, 20, 30], 20));
// HOP ni ham ishlab qoyaman