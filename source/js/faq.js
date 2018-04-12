window.addEventListener('load', function () {
  var faqContainer = document.querySelector('.js-faq');

  if (faqContainer) {
    faqContainer.addEventListener('click', faqEventHandler);
    faqContainer.addEventListener('keydown', keyHandler);
  }
  var currentAnswer = undefined;

  function faqEventHandler(e) {
    if (currentAnswer !== undefined) {
      currentAnswer.classList.toggle('is-visible');
    }
    currentAnswer = e.target.nextElementSibling;
    if (e.target.classList.contains('faq__question')) {
      e.target.nextElementSibling.classList.toggle('is-visible');
    }
  }

  function keyHandler(e) {
    const code = String(e.keyCode);
    if (code.match(/40|32/)) {
      faqEventHandler(e);
    }
  }
});
