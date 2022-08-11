import CryptoService from './crypto-service.js';

export default class Wallet {

  constructor (usd){
    this.usd = usd; //1 balance 
    this.tradeFunds = 0; //2 amount you would request to be traded 
    this.btcShares = 0; //3 
    this.logTransRec = [];  //2
  }

  initiateTransfer() { //updates balance and logs to transfer request 
    const getCurrentBalance = this.usd;  

    if (getCurrentBalance < this.tradeFunds){
      console.log('insufficient funds to make trade');
    } else { 
      currentBalance - this.tradeFunds; 
      this.loggedTransferRequest += this.tradeFunds;  
    } 
    return currentBalance; 
  } 


  async makeTrade(id, tradeFunds)  { 
    let cnData = await CryptoService.getCoin(id);
    let cnPrice = cnData[0].price;
    console.log("cnPrice" + cnPrice);
    console.log("tradeFunds" + tradeFunds);
    let tradeShares = tradeFunds / cnPrice;
    console.log("tradeShares" + tradeShares);
    this.btcShares += tradeShares;
    this.logTransRec.push(tradeShares);
    return this.btcShares;
  }
  
  

}