##Lesson 5: Character Ranges

We just learned how to create a pattern that matches or excludes specific chars -- but what if we want to match a character that can be in a sequential range chars? Do we have no choice but to list them all out?

Luckily, when using the square bracket notation, there is a shorthand for matching a char in list of **sequential chars** by using the **dash** to indicate a char range. For example, the pattern **[0-6]** will only match any single digit char from zero to 6, and nothing else. And likewise, **[^n-p]** will only match any single char **except** for letters n to p.

Multiple char ranges can also be used in the same set of brackets, along with individual chars. An example of this is the alphanumeric **\w** metacharacter which is equivalent to the char range **[A-Za-z0-9_]** and often used to match chars in English text.

In the exercise below, notice how all the match and skip lines have a pattern, and use the bracket notation to match or skip each char from each line. Be aware that patterns are **case sensitive** and **a-z differs** from **A-Z** in terms of the chars in matches (lower vs upper case).

Exercise 5: Matching Character Ranges
- Match: Ana, Bob, Cpc
- Skip: aax, bby, ccz

Solution: All the chars are sequential, so you can use the different ranges in the expression `[A-C][n-p][a-c]` to match only the first three lines
