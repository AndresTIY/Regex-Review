## Lesson 1: An Introduction, and the ABCs

**Regular expressions** are extremely useful in extracting information from text such as code, log file, spreadsheets, or even documents. And while there is a lot of theory behind formal languages, the following lessons and examples will explore the more practical uses of regular expressions so that you can use them as quickly as possible.

The first thing to recognize when using regular expressions is that **everything is essentially a character**, and we are writing patterns to match a specific sequence of characters (also known as a string). Most patterns use normal ASCII, which includes letters, digits, punctuation and other symbols on your keyboard like %#$@!, but unicode characters can also be used to match any type of international text.

Exercise 1: Matching Characters
- Task: Match
- Text: abc
- Text: abcde
- Text: abcdefg

(There's an input field where you type in the characters seen above. Once you type in 'abcdefg' they all get a green check

## Lesson 1.5: The 123s

Characters include normal letters, but digits as well. In fact, numbers 0-9 are also just chars and if you look at an ASCII table, they are listen sequentially.

Over the various lessons, you will be introduced to a number of special metacharacters used in regular expressions that can be used to match a specific type of char. In this case, the character **\d** can be used in place of **any digit from 0-9**. The preceding slash distinguishes it from the simple **d** char and indicates that it is a metacharacter.

Exercise: 1.5: Matching Digits
- Match:
- Text: abc123xyz
- Text: define "123"
- Text: var g = 123;

(Input field just like exercise 1, they all match when you type in 123)
