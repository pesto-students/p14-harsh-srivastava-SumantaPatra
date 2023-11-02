// Section 3 – Abstraction and encpasulation:

// Create a class called BankAccount with properties accountNumber, balance, and accountHolderName. Then, create two subclasses called CheckingAccount and SavingsAccount, each of which extends BankAccount.

// Make the accountNumber, balance, and accountHolderName properties private by using the # symbol before their names.

// Implement the deposit() and withdraw() methods in the CheckingAccount and SavingsAccount subclasses. These methods should accept a amount parameter and update the balance property accordingly.

// However, for the SavingsAccount subclass, if the balance drops below zero after a withdrawal, the withdrawal should fail and the balance should not be updated.

// Implement the getBalance() method in both the CheckingAccount and SavingsAccount subclasses. This method should return the balance property.

// Finally, create instances of each subclass and call the deposit(), withdraw(), and getBalance() methods on each instance, logging the result to the console.

class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  }
  
  class CheckingAccount extends BankAccount {
    #balance;
  
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log('Withdrawal failed. Insufficient funds.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class SavingsAccount extends BankAccount {
    #balance;
  
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
      this.#balance = balance;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log('Withdrawal failed. Insufficient funds.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Example usage:
  const checkingAccount = new CheckingAccount('CHK123', 1000, 'John Doe');
  checkingAccount.deposit(500);
  checkingAccount.withdraw(200);
  console.log('Checking Account Balance:', checkingAccount.getBalance());
  
  const savingsAccount = new SavingsAccount('SAV456', 2000, 'Jane Doe');
  savingsAccount.deposit(1000);
  savingsAccount.withdraw(500);
  console.log('Savings Account Balance:', savingsAccount.getBalance());
  