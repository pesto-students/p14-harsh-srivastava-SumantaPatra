const generateTransactionId = (()=>{
   let transactionId = 0;
   return ()=>{
    transactionId++;
    const transactionString = `TRANSACTION_ID_${transactionId}`
    return Symbol(transactionString)
   }
})()
const transaction1 = generateTransactionId();
const transaction2 = generateTransactionId();
const transaction3 = generateTransactionId();
console.log(transaction1)
console.log(transaction2)
console.log(transaction3)