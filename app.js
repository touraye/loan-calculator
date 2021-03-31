const form = document.getElementById( 'form' );
const amount = document.getElementById( 'loan-amount' );
const interest = document.getElementById( 'interest' );
const monthlyPayment = document.getElementById( 'monthly-pay' );
const calculate = document.getElementById( 'calculate' );
const interestAdded = document.getElementById( 'interest-plus' );
const month = document.getElementById( 'months' );
const totalPay = document.getElementById( 'total-pay' );

form.addEventListener( 'submit', ( e ) => {
    // prevent submission to a server
    e.preventDefault();
    const amountValue = parseInt( amount.value );
    const interestAmount = parseInt( interest.value );
    const monthlyPay = parseInt( monthlyPayment.value );
    
    console.log(amountValue );
    console.log(interestAmount );
    console.log( monthlyPay );
    
    // check for zero and less than zero values
    if ( amountValue < 0 && interestAmount < 0 && monthlyPay <= 0 ) {
        console.log('Please check your input');
    } else if ( amountValue === NaN ) {
        console.log('Value can not be less than 0');
    } else {
        
        const interestRate = ( amountValue * interestAmount ) / 100;
        const total = amountValue + interestRate;
        console.log( `Interest is ${interestRate}` );
        console.log( `Your total pay is ${total}` );
        
        // Get the amount of months to settle the dipt 
        let months = 0;
        let targetAmount = 0;
        let payment = monthlyPay;
        while ( targetAmount <= total ) {
            targetAmount += monthlyPay;
            months++;
        }
    
        console.log( `It will take you ${months} months to pay $${total}` );
        
        // send the result to the front-end
        interestAdded.innerHTML = interestRate;
        month.innerHTML = months;
        totalPay.innerHTML = total;
    }
} );