const btns = document.querySelectorAll('.form__button');
const cardForm = document.querySelector('.form__container');
const formConfirm = document.querySelector('.form__confirmation');

const cardHolderName = document.querySelector('#name');
const cardNumber = document.querySelector('#card__number');
const cardMonth = document.querySelector('#card__month');
const cardYear = document.querySelector('#card__year');
const cardCvc = document.querySelector('#card__cvc');

const displayCardName = document.querySelector('.card--front-details--name');
const displayCardNum = document.querySelector('.card--front-details--card-num');
const displayCardExpDate = document.querySelector('.card--front-details--card-exp-date');
const displatCardCvc = document.querySelector('.card--back-details--card-cvc');

//Date to keep track of input year
const date = new Date();
const cardYearLimit = date.getFullYear().toString().slice(-2);

//Set maximum and minimum character input for specific inputs
cardNumber.maxLength = 19;
cardNumber.minLength = 19;

cardMonth.maxLength = 2;
cardMonth.minLength = 2;

cardYear.maxLength = 2;
cardYear.minLength = 2;

cardCvc.maxLength = 3;
cardCvc.minLength = 3;



const validityState = cardNumber.validity;

//Event Listeners
cardForm.addEventListener('click', function(e) {
   e.preventDefault();
   const btn = e.target.classList.contains('form__button');
   if (!btn) return;

   const details = cardNumber.placeholder
   console.log(validityState);
   cardNumber.setCustomValidity('Wrong format, numbers only')
   console.log(details);

   // displayCardName.textContent = cardHolderName.value;
   // displayCardExpDate.textContent = `${cardMonth.value}/${cardYear.value}`;
   // displayCardNum.textContent = cardNumber.value;
   // displatCardCvc.textContent = cardCvc.value
   
   // cardForm.classList.add('hide');
   // formConfirm.classList.remove('hide');
})

formConfirm.addEventListener('click', function(e) {
   e.preventDefault();
   const btn = e.target.closest('.form__button');
   if (!btn) return;
   
   formConfirm.classList.add('hide');
   cardForm.classList.remove('hide');
})

cardNumber.addEventListener('input', () => {
   if (cardNumber.value.length >= 4) cardNumber.value + '-';
   displayCardNum.textContent = cardNumber.value;
})
