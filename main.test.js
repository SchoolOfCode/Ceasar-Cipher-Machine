import { getEncodedWord } from "./main.js";

const wordsAndOutputNormal = [
  ["dog", true, "fqi"],
  ["racoon", true, "tceqqp"],
  ["unicorn", true, "wpkeqtp"],
  ["fqi", false, "dog"],
  ["tceqqp", false, "racoon"],
  ["wpkeqtp", false, "unicorn"],
];

const wordsAndOutputWrap = [
  ["zebra", true, "bgdtc"],
  ["zorse", true, "bqtug"],
  ["yak", true, "acm"],
  ["bgdtc", false, "zebra"],
  ["bqtug", false, "zorse"],
  ["acm", false, "yak"],
];

const wordsAndOutputCapitals = [
  ["PENGUIN", true, "rgpiwkp"],
  ["Dragon", true, "ftciqp"],
  ["shREW", true, "ujtgy"],
  ["fQpmGA", false, "donkey"],
  ["pGyVU", false, "newts"],
  ["dGCt", false, "bear"],
];

describe("Testing getEncodedWord, which passes in a word and a boolean to determine if the function should encode or decode", () => {
    it.each(wordsAndOutputWrap)(
        `'%s',when mode is %s should be '%s' and wrap around`,
        (input, mode, expected) => {
        expect(getEncodedWord(input, mode)).toBe(expected);
        }
  );

    it.each(wordsAndOutputCapitals)(
        `'%s', when mode is %s should be '%s' and ignore the capital letter(s)`,
        (input, mode, expected) => {
        expect(getEncodedWord(input, mode)).toBe(expected);
        }
  );

    it.each(wordsAndOutputNormal)(
        " '%s', when mode is %s should be '%s'",
        (input, mode, expected) => {
        expect(getEncodedWord(input, mode)).toBe(expected);
        }
    );
});
