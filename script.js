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

//call button & coins reduction
const callbtns = document.getElementsByClassName('call-btn');
//console.log(callbtns);
let coinAmount = document.getElementById('coin-number');

//history container
const historyContainer = getElement('history-container');
//const history = document.createElement('div');

//live time
const now = new Date();
const localTime = now.toLocaleTimeString();

for (let call of callbtns) {
  call.addEventListener('click', function () {
    const serviceName = call.parentNode.parentNode.childNodes[3].innerText;
    //console.log(serviceName);
    const serviceNumber = call.parentNode.parentNode.childNodes[7].innerText;
    //console.log(serviceNumber);

    alert('Calling' + ' ' + serviceName + ':' + serviceNumber + '...');

    //coin reduce
    const currentCoin = Number(coinAmount.innerText);
    if (currentCoin === 0) {
      alert('Your coin is finished. Atleast 20 coins needed for a call.');
      callbtns.disabled = true;
      return;
    } else {
      const coinReduce = Number(currentCoin) - Number(20);
      coinAmount.innerHTML = coinReduce;
    }
    //new div created for history
    const history = `
    <div class="flex justify-between items-center bg-gray-200 rounded-[10px] my-2">
          <div class="flex flex-col">
           <h1 class="mx-5 text-center">${serviceName}
          </h1>
            <h1 class="mt-3 mx-5">${serviceNumber}</h1>
          </div>
          <span class="text-sm mx-2 text-center block">${localTime}</span>
          </div>`;
    historyContainer.insertAdjacentHTML('beforeend', history);
  });
}

//clear history
getElement('clear-btn').addEventListener('click', function () {
  const history_Container = getElement('history-container');
  history_Container.innerHTML = '';
});

//copy count increment
let copyCount = document.querySelectorAll('.copy-item');

for (const copy of copyCount) {
  copy.addEventListener('click', function () {
    //print copied number
    const serviceNumber = copy.parentNode.parentNode.childNodes[7].innerText;
    alert('Help line number: ' + serviceNumber);

    //increase number of the time any number copied
    const currentCopy = document.getElementById('copy-count').innerText;
    const addCopy = Number(currentCopy) + Number(1);
    document.getElementById('copy-count').innerText = addCopy;
  });
}

//copy to clipboard
function copyText() {
  for (const copy of copyCount) {
    copy.addEventListener('click', function () {
      //print copied number
      const serviceNumber = copy.parentNode.parentNode.childNodes[7].innerText;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(serviceNumber);
      }
    });
  }
}
