/* 
Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language. 
*/

function cracklePop() {
    let str = '';
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) output = 'Crackle';
        if (i % 5 === 0) output += 'Pop';
        if (output) console.log(output);
        else console.log(i);
    }
}

cracklePop();
