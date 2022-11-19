function evenOrOdd (input) {
    let evenOrOdd = Number(input[0]);
    if (evenOrOdd % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd')
    }
}

evenOrOdd([1])