let tip = document.getElementById("tipAmount");

let tip5 = document.getElementById("5PercentTip");
let tip10 = document.getElementById("10PercentTip");
let tip20 = document.getElementById("20PercentTip");

tip20Amount = .20;
tip5Amount = .5;
tip10Amount = .10;

let btn = document.getElementById("btnSendTip");

tip20.addEventListener('click', e => {
    let tip = document.getElementById("tipAmount").value;
    let res = parseFloat(tip) * parseFloat(tip20Amount);
    alert(res);
})

tip5.addEventListener('click', e => {
    let tip = document.getElementById("tipAmount").value;
    let res = parseFloat(tip) * parseFloat(tip5Amount);
    alert(res);
})

tip10.addEventListener('click', e => {
    let tip = document.getElementById("tipAmount").value;
    let res = parseFloat(tip) * parseFloat(tip10Amount);
    alert(res);
})