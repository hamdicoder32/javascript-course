// welcome page and form page

// grab html elements

const welcomePage = document.querySelector(".welcome-page");
const openNewAcount = document.getElementById("createbtn");
const formPage = document.querySelector(".form-page");
const cancelToOpenAccount = document.getElementById("cancelbtn");

// open new account page or form page
openNewAcount.addEventListener("click", () => {
  welcomePage.style.display = "none";
  formPage.style.display = "flex";
});

// cancel to open new account
cancelToOpenAccount.addEventListener("click", () => {
  welcomePage.style.display = "flex";
  formPage.style.display = "none";
});

// create bank account class

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

// form submition
let account;
const form = document.querySelector(".form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const createAccountBtn = document.getElementById("createBtn");
const successPage = document.querySelector(".success-page");

const accountNumber = document.getElementById("account-number");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  account = new BankAccount(name, email);
  localStorage.setItem("account", JSON.stringify(account));
  formPage.style.display = "none";
  successPage.style.display = "flex";
  accountNumber.textContent = `${account._accountNumber}`;
});

// go dashboard scren
const goDashboard = document.getElementById("continuebtn");

const goHome = document.getElementById("go-home");

if (goDashboard) {
  goDashboard.addEventListener("click", () => {
    window.location.href = "dashboard.html";
    updateDashboard()
  });

}

if (goHome) {
  goHome.addEventListener("click", () => {
    window.location.href = "index.html";
    updateDashboard()
  });
}
// dashboard screen content
const userName = document.querySelector(".name");
const userEmail = document.querySelector(".email");
const accountNO = document.querySelector(".account-NO");
let balance = document.querySelector(".balance");

function updateDashboard() {
  const account = JSON.parse(localStorage.getItem("account"));
  if(account){
  userName.textContent = `Welcome , ${account._name}`;
  userEmail.textContent = `Email: ${account._email}`;
  accountNO.textContent = account._accountNumber;
  balance.textContent = `Balance:$${account._balance}`;
  }

}
updateDashboard()

