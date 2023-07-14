let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value)/12/100;
  let t = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;
  let emi =
    duration == "year" ? 
    p*r*(Math.pow(1 + r, t*12) / (Math.pow(1 + r, t*12) - 1)) : 
    p*r*(Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1));
  let pay_amount = duration == "year" ? emi*t*12 : emi*t;
  let interest_due = pay_amount-p;
  result.innerHTML = `<div>Principal Amount: ₹ <span>${p.toFixed(2)}</span></div>
  <div>EMI: ₹ <span>${emi.toFixed(2)}</span></div>
  <div>Total amount payable: ₹ <span>${pay_amount.toFixed(2)}</span></div>
  <div>Total interest due: ₹ <span>${interest_due.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);