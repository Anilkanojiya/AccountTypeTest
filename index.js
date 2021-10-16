const accountTypeChecker = (accountBalanceHistory = []) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    // let result;

    const balanceAmt = [];
    const amountDifferenceArr = [];
    
    let currAmt = 0;
    accountBalanceHistory.forEach((item) => {
        const account = item.account.balance;
        let diff = currAmt - account.amount;
        currAmt = account.amount;
        if (diff !== 0) {
            amountDifferenceArr.push(diff);
        }

    });
    
    const result = (!amountDifferenceArr.every(diff => diff === amountDifferenceArr[0]));
    console.log('Account Balance amount', amountDifferenceArr);
  
    return result ? "A" : "B";
  };

  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: -100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: -200 },
      },
    }
  ];

  const result = accountTypeChecker(accountBalanceHistory);
  console.log(result);

  /***
   * Does it solve the basic case? -- Yes
   * What other cases might need to be considered? 
   * case 1: If account balance in all month is 0
   * case 2: If account balance is increased by constant amount each month
   * What unit tests might you write for this type of function?
   * UT To check if it properly validates Type A
   * UT To check if it properly validates Type B 
   **/