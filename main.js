/* 
👉 Write your kata here!

Encyrptor/Decryptor

a- +2 - c
b- d
c -e 

z- b
*/

// alp = [ ]

// indexOfLetter = alp.findIndex("e")

// LetterPlusTwoInTheAlphabet = alp[indexOfLetter+2]


// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Given a word, return the world encoded in the ceasar cypher(each letter is +2 of its position in the alpabet)
// dogs >>> fqiu 

//Handle edge cases y,z and numbers, spaces



//👉 Write the function your CodeWarriors will start with below here:


const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

export function getEncodedWord(word, encoding){

    if(encoding){
        let wordAsArray = word.split("") //cats >> [c,a,t,s]
        console.log(wordAsArray);//works

        let encodedWord = wordAsArray.map(function(v,i,array){ // go through each letter 'c' find the index of c alp,
                // const letterIndex =  alphabet.findIndex(v => v === v)
                // console.log(letterIndex)
                const letterIndex = alphabet.findIndex(letter => letter === v) 
                return alphabet[letterIndex+2]
                })


        console.log(encodedWord);
        return encodedWord.join("")

             }else{ 


                let wordAsArray = word.split("") //cats >> [c,a,t,s]
                console.log(wordAsArray);//works
        
                let encodedWord = wordAsArray.map(function(v,i,array){ // go through each letter 'c' find the index of c alp,
                        // const letterIndex =  alphabet.findIndex(v => v === v)
                        // console.log(letterIndex)
                        const letterIndex = alphabet.findIndex(letter => letter === v) 
                        return alphabet[letterIndex-2]
                        })
        
        
                console.log(encodedWord);
                return encodedWord.join("")
        

             }
        
    }
    





getEncodedWord("dog", true)