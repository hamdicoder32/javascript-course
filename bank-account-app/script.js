// grab html elements

const createbtn = document.getElementById("createbtn");
const accountForm = document.querySelector(".account-form");
const welcome = document.querySelector(".welcome");
const success = document.querySelector(".success");
const accountNumber = document.querySelector(".account-NO");
const accountNO = document.getElementById("account-NO");
const continueBtn = document.getElementById("continuebtn");
let dashboard = document.querySelector(".dashboard");
const userName = document.querySelector(".userName");
const userEmail = document.querySelector(".userEmail");
let balance = document.querySelector(".balance");
const accountCreateCancelBtn = document.getElementById("cancelbtn");
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const depositError = document.querySelector(".deposit-error");
const withdrawError = document.querySelector(".withdraw-error");
const openDepositBtn = document.getElementById("depositbtn");
const depositPage = document.querySelector(".deposit-page");
const depositSubmitBtn = document.getElementById("depositBtn");
const amount = document.getElementById("amount");
const depositCancelBtn = document.getElementById("cancelBtn");
const openWithdrawBtn = document.getElementById("withdrawbtn");
const withdrawPage = document.querySelector(".withdraw-page");
const withdrawalSubmitBtn = document.getElementById("withdrawalBtn");
const withdrawalCancelBtn = document.getElementById("cancel-btn");
const withdrawalAmount = document.getElementById("withdrawal-amount");
const transactionList = document.getElementById("transaction-list");
// creating bank account class
class BankAccount {
  constructor(name, email) {
    this._name = name;
    this._email = email;
    this._accountNumber = this.generateAccountNumber();
    this._balance = 0;
    this._transactions = [];
  }
  generateAccountNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      return false;
    }
    this._balance += amount;

    this._transactions.push({
      type: "deposit",
      amount: amount,
      date: new Date().toLocaleDateString("en-us"),
    });

    return true;
  }

  withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
      return "invalid";
    }
    if (amount > this._balance) {
      return "insufficient";
    }
    this._balance -= amount;
    this._transactions.push({
      type: "withdraw",
      amount: amount,
      date: new Date().toLocaleDateString("en-us"),
    });
    return "succes";
  }
}

let account;
// form submision
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  account = new BankAccount(name, email);
  saveAccounData();
  accountForm.style.display = "none";
  success.style.display = "flex";
  // add account number
  accountNumber.textContent = `${account._accountNumber}`;
});

// save bank into local storage
function saveAccounData() {
  localStorage.setItem("account", JSON.stringify(account));
}
// dashboard ui
function showDashboard() {
  // welcome page
  welcome.style.display = "none";
  // account form page
  accountForm.style.display = "none";
  //success page
  success.style.display = "none";
  // deposit page
  depositPage.style.display = "none";
  // withdraw page
  withdrawPage.style.display = "none";
  // dashboard
  dashboard.style.display = "flex";
  userName.textContent = `Welcome , ${account._name}`;
  userEmail.textContent = `Email: ${account._email}`;
  accountNO.textContent = account._accountNumber;
  balance.textContent = `Balance:$${account._balance}`;
  displayTransactions();
}
// dashbord screen
continueBtn.addEventListener("click", () => {
  showDashboard();
});
// deposit screen
openDepositBtn.addEventListener("click", () => {
  depositPage.style.display = "flex";
  dashboard.style.display = "none";
});
// widthrawal screen
openWithdrawBtn.addEventListener("click", () => {
  withdrawPage.style.display = "flex";
  dashboard.style.display = "none";
});
// deposit operation
depositSubmitBtn.addEventListener("click", () => {
  const depositAmount = Number(amount.value);
  const success = account.deposit(depositAmount);
  if (!success) {
    depositError.textContent = "Please enter a valid amount.";
    return;
  }
  saveAccounData();
  showDashboard();
  depositPage.style.display = "none";
  dashboard.style.display = "flex";
  amount.value = "";
  depositError.textContent = "";
});
// deposit cancel
depositCancelBtn.addEventListener("click", () => {
  depositPage.style.display = "none";
  dashboard.style.display = "flex";
});
// withdraw cancel
withdrawalCancelBtn.addEventListener("click", () => {
  withdrawPage.style.display = "none";
  dashboard.style.display = "flex";
});
// withdrawl operaton
withdrawalSubmitBtn.addEventListener("click", () => {
  const withrawAmount = Number(withdrawalAmount.value);
  // const widthrawalSuccess = account.withdraw(withrawAmount);
  const result = account.withdraw(withrawAmount);
  if (result === "invalid") {
    withdrawError.textContent = "Please enter a valid amount.";
    return;
  }
  if (result === "insufficient") {
    withdrawError.textContent = "Not enough balance.";
    return;
  }
  saveAccounData();
  showDashboard();
  withdrawPage.style.display = "none";
  dashboard.style.display = "flex";
  withdrawalAmount.value = "";
  withdrawError.textContent = "";
});
// transactions history
function displayTransactions() {
  transactionList.innerHTML = "";
  account._transactions.forEach((transaction) => {
    const transactionElement = document.createElement("div");
    transactionElement.classList.add("transaction-item");
    transactionElement.innerHTML = `
    <span>${transaction.type}</span>
    <span>$${transaction.amount}</span>
    <span>${transaction.date}</span>
    `;
    transactionList.appendChild(transactionElement);
  });
}

// --------------create btn------------------
createbtn.addEventListener("click", () => {
  welcome.style.display = "none";
  accountForm.style.display = "flex";
});
// account create cancel bnt
accountCreateCancelBtn.addEventListener("click", () => {
  accountForm.style.display = "none";
  welcome.style.display = "flex";
});

// load account data
function loadAccountData() {
  const savedAccount = localStorage.getItem("account");
  if (savedAccount) {
    const savedData = JSON.parse(savedAccount);
    account = new BankAccount(savedData._name, savedData._email);
    account._accountNumber = savedData._accountNumber;
    account._balance = savedData._balance;
    account._transactions = savedData._transactions;
    showDashboard();
  }
}
loadAccountData();

// delete account
const deleteBtn = document.getElementById("deleteBtn");
function deleteAccount() {
  localStorage.removeItem("account");
  account = null;
}
deleteBtn.addEventListener("click", () => {
  const confirmed = confirm("Are you sure you want to delete your account?");
  if (confirmed) {
    deleteAccount();
    showWelcome();
  }
});
function showWelcome() {
  welcome.style.display = "flex";
  accountForm.style.display = "none";
  success.style.display = "none";
  dashboard.style.display = "none";
  depositPage.style.display = "none";
  withdrawPage.style.display = "none";
}
