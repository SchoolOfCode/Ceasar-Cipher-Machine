/*
----------Ceasar Cipher Machine----------

    From wikipedia: 
    In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

    Make a Ceasar Cipher encrypter that takes in a word and right shifts each letter by 2:
            A >> C
            D >> F
            E >> G
            Q >> S
            dog >> fqi
            unicorn >> wpkeqtp
            shrew >> ujtgy

    The function should take in a string as the first parameter and a second boolean "mode" parameter
    When mode is true, encrypt the word
    When mode is false decrypt the word by left shifting by two:
            fqi >> dog
            wpkeqtp >> unicorn
            ujtgy >> shrew

    Sometimes, shifting by 2 is not possible (right shifting y and z and left shfiting a and b), so the function should wrap around the alphabet:
            y >> a
            z >> b
            a << y
            b << z


    The output should always be in lowercase, ignoring capilisation in the input.
    The input will never have spaces, numbers or non a-z characters.


    Have fun :D 

*/

getEncodedWord(word, modeAsBoolean){
    //Your solution here
}

//console.log(getEncodedWord("dave",true))

