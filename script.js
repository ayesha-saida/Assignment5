function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
getElement('card-items').addEventListener('click', function (e) {
  if (e.target.className.includes('copy-item')) {
    // alert('card clicked');
  }
});
//heart number increment
let iconNumber = document.querySelectorAll('.icon-btn');
for (const icon of iconNumber) {
  icon.addEventListener('click', function () {
    const currentNumber = document.getElementById('count-number').innerHTML;
    const addNumber = Number(currentNumber) + Number(1);
    document.getElementById('count-number').innerHTML = addNumber;
  });
}
