const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("result-div");

check.addEventListener("click", () => {
  if(!input.value) {
    alert("Please provide a phone number")
  }
});

clear.addEventListener("click", () => {
    results.innerText = "";
  });