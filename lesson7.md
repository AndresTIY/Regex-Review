##Lesson 7: Mr. Kleene, Mr. Kleene

A powerful concept in regex is the ability to match an arbitrary number of chars. For ex, imagine that you wrote a form that has a donation field that takes a numerical value in dollars. A wealthy user may drop by and want to donate $25,000 while a normal user may want to donate $25.

One way to express such a pattern would be to use what is known as the **Kleene Star** and the **Kleene Plus**, which essentially represents either **0 or more** or **1 or more** of the char that it follows (it always follows a char or group). For ex, to match the donations above, we can use the pattern \d* to match any number of digits, but a tighter regex would be \d+ which ensures that the input string has at least one digit.

The quantifiers can be used with any char or special metachar, for ex. **a+** (one or more a's), **[abc]+**  (onen or more of any a,b, or c char) and .* (zero or more of any char).

Below are a few simple strings that you can match using both the star and plus metachars.

Exercise 7: Matching Repeated Chars

- Match: aaaabcc, aabbbbc, aacc
- Skip: a

Solution: There are at least two a's, zero or more b's, and at least one c in each line to match, so you can use the exp `aa+b*c+` to represent this exactly.

Alternatively, an even more restrictive exp would be `a{2,4}b{0,4}c{1,2}` which puts both an upper and lower bound on the number of each of the chars.
