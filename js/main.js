// VARIABLES
const elsPricingMode = document.querySelectorAll('input[type=radio]');
const elsPricing = document.querySelectorAll('.pricing');

// FUNCTION
elsPricingMode.forEach(function (elPricing) {
  elPricing.addEventListener('change', function () {

    const period = elPricing.value;
    if (period === 'annually') {
      elsPricing.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentAnnually;
      });
    } else {
      elsPricing.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-list-item').dataset.paymentMonthly;
      });
    }
  });
});