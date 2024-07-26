/* Оваа програма е наменета само за едукативни и тестирачки цели. Не треба да се користи за нелегални активности, вклучувајќи, но не ограничувајќи се на, измама, кражба на идентитет, или било каква друга незаконска дејност. Авторот не е одговорен за никаква злоупотреба на програмата и не презема никаква одговорност за последиците од користењето на истата. */
/* Автор: Леонид Крстевски. */

/* This program is intended for educational and testing purposes only. It should not be used for illegal activities, including, but not limited to, fraud, identity theft, or any other illegal activity. The author is not responsible for any misuse of the program and does not assume any responsibility for the consequences of using it. */
/* Author: Leonid Krstevski. */

document.addEventListener('DOMContentLoaded', () => {
  setYear();

  // Populate bins based on selected bank
  document.getElementById('bank').addEventListener('change', function () {
    populateBins(this.value);
  });

  // Generate cards based on selected bin
  document.getElementById('generar').addEventListener('click', function () {
    const tr = 100;
    const selectedBin = document.getElementById('bins').value;
    if (selectedBin) {
      generateCards(selectedBin, tr);
    } else {
      alert('Please select a BIN');
    }
  });

  document.getElementById('cleanText').addEventListener('click', cleanText);
});

function populateBins(bank) {
  const binsDropdown = document.getElementById('bins');
  binsDropdown.innerHTML = ''; // Clear previous options

  const bins = getBinsForBank(bank);
  bins.forEach(bin => {
    const option = document.createElement('option');
    option.value = bin;
    option.textContent = bin;
    binsDropdown.appendChild(option);
  });
}

function getBinsForBank(bank) {
  const binsMap = {
    "TTK": ["484819", "484820", "484821", "484822"],
    "Stopanska": ["406245", "406439", "413887", "417733", "426027", "427747", "440548", "462720", "466701", "472875"],
    "Sparkasse": ["472893", "472894", "472895", "472896", "472897", "472904"],
    "NLB": ["412527", "432481", "432482", "432483", "432484", "432485", "432486"],
    "Komercijalna": ["447803", "447804", "447805", "447806", "447807", "447808", "447809", "484643"],
    "Halk": ["412555", "429721", "429722", "429723", "429724", "446095"]
  };

  return binsMap[bank] || [];
}

function generateCards(selectedBin, tr) {
  const ccghm = Math.min(Math.max(parseInt(document.getElementById('ccghm').value), 1), 100);
  let output = '';
  
  for (let k = 0; k < ccghm; k++) {
    let cardNumber = generateCardNumber(selectedBin, tr);
    
    if (cardNumber) {
      const formattedCard = formatCard(cardNumber);
      output += `${formattedCard}\n`;
    } else {
      output = 'Error generating card numbers';
      break;
    }
  }
  
  document.getElementById('output2').value = output;
}

function generateCardNumber(bin, tr) {
  let cardNumber = '';
  let valid = false;
  
  for (let i = 0; i < tr; i++) {
    cardNumber = bin;
    while (cardNumber.length < 15) {
      cardNumber += Math.floor(Math.random() * 10).toString();
    }
    cardNumber += calculateLuhnCheckDigit(cardNumber);
    
    if (isValidCardNumber(cardNumber)) {
      valid = true;
      break;
    }
  }
  
  return valid ? cardNumber : null;
}

function calculateLuhnCheckDigit(number) {
  let sum = 0;
  let shouldDouble = true;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (10 - (sum % 10)) % 10;
}

function isValidCardNumber(number) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function formatCard(cardNumber) {
  const ccv = document.getElementById('eccv').value === 'случаен' ? Math.floor(Math.random() * 1000).toString().padStart(3, '0') : document.getElementById('eccv').value;
  const month = document.getElementById('emeses').value === 'rnd' ? (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0') : document.getElementById('emeses').value;
  const year = document.getElementById('eyear').value === 'rnd' ? (new Date().getFullYear() + Math.floor(Math.random() * 6)).toString() : document.getElementById('eyear').value;

  return `${cardNumber}|${month}|${year}|${ccv}`;
}


function cleanText() {
  document.getElementById('output2').value = '';
}

function setYear() {
  const dateElement = document.getElementById('date');
  if (dateElement) {
    dateElement.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setYear();

  // Populate bins based on selected bank
  document.getElementById('bank').addEventListener('change', function () {
    populateBins(this.value);
  });

  // Generate cards based on selected bin
  document.getElementById('generar').addEventListener('click', function () {
    const tr = 100;
    const selectedBin = document.getElementById('bins').value;
    if (selectedBin) {
      generateCards(selectedBin, tr);
    } else {
      alert('Please select a BIN');
    }
  });

  document.getElementById('cleanText').addEventListener('click', cleanText);
});


/* Оваа програма е наменета само за едукативни и тестирачки цели. Не треба да се користи за нелегални активности, вклучувајќи, но не ограничувајќи се на, измама, кражба на идентитет, или било каква друга незаконска дејност. Авторот не е одговорен за никаква злоупотреба на програмата и не презема никаква одговорност за последиците од користењето на истата. */
/* Автор: Леонид Крстевски. */

/* This program is intended for educational and testing purposes only. It should not be used for illegal activities, including, but not limited to, fraud, identity theft, or any other illegal activity. The author is not responsible for any misuse of the program and does not assume any responsibility for the consequences of using it. */
/* Author: Leonid Krstevski. */