import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service.js';
import Wallet from './js/wallet.js';

async function getCoin(id) {
  const response = await CryptoService.getCoin(id);
  if (response) {
    printElements(response, id);
  } else {
    printError(response);
  }
}

function printElements(response, id) {
  let idArray = id.split(',');
  let respTextArray = [];
  response.forEach(function(element, index) {
    respTextArray.push(`${idArray[index]} is ${element.price}`);
  });
  document.querySelector('#showResponse').innerText = respTextArray;
} 
//element.price / input our money return how many coins we bought.
function printError(error, id) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${id}: 
  ${error}.`;
}

function tradeButton() {
  event.preventDefault();
  console.log("working!");
  const newWallet = new Wallet(1000);
  newWallet.makeTrade("BTC", 100000);
  
}

function handleFormSubmission(event) {
  event.preventDefault();
  const cryptoId = document.querySelector('#id').value.toUpperCase();
  document.querySelector('#id').value = null;
  getCoin(cryptoId);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
  document.querySelector('#walletForm').addEventListener("submit", tradeButton);
});