// VARIABLES
const elAnnually = document.getElementById("annually");
const elMonthly = document.getElementById("monthly");
const elBasic = document.getElementById("basic");
const elPro = document.getElementById("pro");
const elMaster = document.getElementById("master");
const elSlider = document.querySelector(".slider-label-monthly");

// FUNCTION
elAnnually.addEventListener("click", function () {
  elBasic.textContent = ("19.99");
  elPro.textContent = ("24.99");
  elMaster.textContent = ("39.99");
  elSlider.classList.remove("slider-label-monthly");
});

elMonthly.addEventListener("click", function () {
  elBasic.textContent = ("199.99");
  elPro.textContent = ("249.99");
  elMaster.textContent = ("399.99");
  elSlider.classList.add("slider-label-monthly");
});

elSlider.addEventListener("click", function() {
  let a = elSlider.classList.toggle("slider-label-monthly");
  if(a == true){
    elBasic.textContent = ("199.99");
    elPro.textContent = ("249.99");
    elMaster.textContent = ("399.99");
  }else{
    elBasic.textContent = ("19.99");
    elPro.textContent = ("24.99");
    elMaster.textContent = ("39.99");
    elSlider.classList.remove("slider-label-monthly");
  }
});
