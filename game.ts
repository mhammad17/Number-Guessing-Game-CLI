#! /user/bin/env node 



import inquirer from "inquirer";

console.log ("Welcom To Jumangi");

const RandomNumber = Math.floor(Math.random() * 3 + 1);   // Math.floor(Math.random() * 3 + 1) will generate random number

const answer = await inquirer.prompt ([{

    type: 'number',
    name: 'guessingNumber',
    massage: 'From 1 to 5: '
    
}])

if(answer.guessingNumber === RandomNumber ){

console.log('Congradlation You are Guess Correct one.');


 /*                                               // when someone guess 3 Number it will Print you are guess spacial number. from here

if(RandomNumber === 3 && answer.guessingNumber === RandomNumber) {

    console.log('your guess Spacial number.')
}
                                               // To Here */

 if(RandomNumber == Math.floor(Math.random() * 3 + 1)) {

    console.log('your guess Spacial number.');

}                                              

} else {

console.log('Am Sorry You Are Fail TryAgain.');

}