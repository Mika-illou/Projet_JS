class BankAccount {

  // 1. Constructeur
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // 2. Méthode pour effectuer un dépôt
  deposit(amount) {

    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    // Enregistrer la transaction
    this.transactions.push({
      type: "deposit",
      amount: amount
    });

    // Mettre à jour le solde
    this.balance += amount;

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  // 3. Méthode pour effectuer un retrait
  withdraw(amount) {

    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    // Enregistrer la transaction
    this.transactions.push({
      type: "withdraw",
      amount: amount
    });

    // Mettre à jour le solde
    this.balance -= amount;

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  // 4. Vérifier le solde actuel
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // 5. Afficher tous les dépôts
  listAllDeposits() {

    const deposits = this.transactions
      .filter(transaction => transaction.type === "deposit")
      .map(transaction => transaction.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  // 6. Afficher tous les retraits
  listAllWithdrawals() {

    const withdrawals = this.transactions
      .filter(transaction => transaction.type === "withdraw")
      .map(transaction => transaction.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// 7. Créer une instance du compte bancaire
const myAccount = new BankAccount();

// 8. Effectuer au moins cinq transactions

myAccount.deposit(500);
myAccount.deposit(300);
myAccount.withdraw(100);
myAccount.withdraw(50);
myAccount.deposit(200);

// 9. Afficher les informations du compte
console.log(myAccount.checkBalance());

console.log(myAccount.listAllDeposits());

console.log(myAccount.listAllWithdrawals());
