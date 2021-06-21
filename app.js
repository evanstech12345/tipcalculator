let tip = document.getElementById("tipAmount");

let tip5 = document.getElementById("5PercentTip");
let tip10 = document.getElementById("10PercentTip");
let tip20 = document.getElementById("20PercentTip");

let btn = document.getElementById("btnSendTip");

btn.addEventListener('click', e => {
    let tip = document.getElementById("tipAmount").value;
    let res = parseFloat(tip) + parseFloat(tip)
    console.log(res)
})

