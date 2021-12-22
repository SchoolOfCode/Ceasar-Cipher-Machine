import {getEncodedWord} from "./main.js"


//👉 Write your tests below here:
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//dogs >>> fqiu
const wordsAndOutputNormal = [
    ["dog", true, "fqi"],
    ["racoon", true, "tceqqp"],
    ["wpkeqtp", false, "unicorn"],
    
]

const wordsAndOutputWrap = [ ["zebra", true, "bgdtc"], 
                           ["zorse", true, "bqtug"],
                           ["Yak", true, "acm"] ]


const wordsAndOutputCapitals = [ ["zebra", true, "bgdtc"], 
                           ["Dragon", true, "ftciqp"] ]



describe("encoder/decoder" ,()=>{

    //Testing for wraps

    // it.each(wordsAndOutputWrap)('should wrap around the alpabet when given %a, set to encode by %b, and return %c', 
    // (input, mode, expected) => {

    //         expect(getEncodedWord(input,mode)).toBe(expected)
    // }
    // )

    

    //Testing for capitals

    //Testing normal conditions


    it.each(wordsAndOutputNormal)('should encode or decode %a when given the mode %b', 
    (input, mode, expected) => {

            expect(getEncodedWord(input,mode)).toBe(expected)
    }
    )

})