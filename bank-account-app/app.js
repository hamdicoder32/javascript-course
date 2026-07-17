// withdraw(amount) {
//   if (isNaN(amount) || amount <= 0) {
//     return "invalid";
//   }

//   if (amount > this._balance) {
//     return "insufficient";
//   }

//   this._balance -= amount;

//   this._transactions.push({
//     type: "withdraw",
//     amount: amount
//   });

//   return "success";
// }

// part2

// const result = account.withdraw(withdrawAmount);

// if (result === "invalid") {
//   withdrawError.textContent = "Enter a valid amount.";
//   return;
// }

// if (result === "insufficient") {
//   withdrawError.textContent = "You don't have enough balance.";
//   return;
// }


// html

<div class="success">
  <div class="success-icon">
    <i class="fa-solid fa-check"></i>
  </div>

  <h2>Account Created Successfully! 🎉</h2>

  <p>Your account number:</p>

  <span class="account-NO"></span>

  <button type="button" id="continuebtn">
    Continue to Dashboard
  </button>
</div>

// css


// .success {
//   background-color: #fff;
//   padding: 40px;
//   border-radius: 16px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// }

// .success-icon {
//   width: 80px;
//   height: 80px;

//   background-color: #20b879;
//   border-radius: 50%;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   margin-bottom: 20px;
// }

// .success-icon i {
//   color: white;
//   font-size: 40px;
// }

// .success-icon {
//   animation: successPop 0.5s ease;
// }

// @keyframes successPop {
//   0% {
//     transform: scale(0);
//   }

//   70% {
//     transform: scale(1.1);
//   }

//   100% {
//     transform: scale(1);
//   }
// }