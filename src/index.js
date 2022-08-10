import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service.js';

async function getCoin(id) {
  const response = await CryptoService.getBtc(id);
  console.log(response);
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
//element.price / input our money return how namy coins we bought.
function printError(error, id) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${id}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const cryptoId = document.querySelector('#id').value.toUpperCase();
  document.querySelector('#id').value = null;
  getCoin(cryptoId);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});