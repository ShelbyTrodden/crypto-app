export default class Wallet {

  constructor (usd){
    this.usd = 0; //1 balance 
    this.tradeFunds = 0; //2 amount you would request to be traded 
    this.btcShares = 0; //3 
    this.loggedTransferRequest = 0;  //2
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


  makeTrade()  { 

    return this.tradeFunds / //price of 1 share of bitcoin in USD which we get from our gitCoin(BTC)//
     = this.btcShares; 

  }
  
  

}