// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
//accept credit card number as a string and turn into an array
const acceptCredCardString = (creditCardString) => {
  let creditCardArray=[];
  for(i=0; i< creditCardString.length;i++)
    { creditCardArray.push(parseInt(creditCardString[i],10));
    }
  return creditCardArray;
}
//validates a credit card number with boolean return
const validateCred=(originalArray)=> {
  let validCards=originalArray.slice();
  validCards.pop();
  validCards.reverse;
  for (let i=0; i< validCards.length; i+=2)
    {
      validCards[i] *= 2;
    }
      for (let i=0; i < validCards.length; i++)
        {if (validCards[i]>9)
            {
            validCards[i]-=9;
            }
        }
  let cardCheckSum=validCards.reduce((a,b)=> a+b,0);
  let finalSum = cardCheckSum+originalArray.pop();
  return finalSum % 10 ===0;
  };

let newInvalidArray=[];

//turn invalid numbers into valid ones
/*const correctCard = (invalidCardNum) => {
  if(validateCred(invalidCardNum)===false){
    
  }
}
*/

//return an array of invalid cards
const findInvalidCards=(validateArrayCheck)=> {
  
  for (let i = 0; i<validateArrayCheck.length;i++)
    if(validateCred(validateArrayCheck[i])===false)
    {
    newInvalidArray.push(validateArrayCheck[i]);
    }
    return newInvalidArray;
  }
//list all the companies giving out invalid cards
const idInvalidCardCompanies=(companyID)=> {
  const invalidCompanyCardNum = [];
  for (i=0; i<companyID.length;i++){
      switch (companyID[i][0])
      {
        case 3: if(invalidCompanyCardNum.indexOf('Amex')===-1)
        {
          invalidCompanyCardNum.push('Amex');
        }
          break;
        case 4: if(invalidCompanyCardNum.indexOf('Visa')===-1)
        {
          invalidCompanyCardNum.push('Visa');
        }
          break;
        case 5: if(invalidCompanyCardNum.indexOf('Mastercard')===-1)         {                   invalidCompanyCardNum.push('Mastercard');
        }
          break;
        case 6 : if(invalidCompanyCardNum.indexOf('Discover')===-1)
          {
          invalidCompanyCardNum.push('Discover');
          }
          break;
    default : console.log('Company not found');
      }
}
return invalidCompanyCardNum;
}
//check an array for validity    
console.log(validateCred(mystery1));
//log all invalid card numbers in the array 'batch'
console.log(findInvalidCards(batch));
//list all credit card companies issues invalid numbers
console.log(idInvalidCardCompanies(newInvalidArray));
//separate a credit card string into an array 
console.log(acceptCredCardString('5450540037128998'));



