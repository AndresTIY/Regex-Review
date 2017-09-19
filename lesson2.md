## Lesson 2: The Dot

In some card games, the Joker is a wildcard and can represent any card in the deck. With regular expressions, you are often matching pieces of text that you don't know the exact contents of, other than the fact that they share a common pattern or structure (eg. phone numbers or zip codes).

Similarly, there is the concept of a **wildcard**, which is represented by the . (dot) metacharacter, and can **match any single character**(letter, digit, whitespace, everything). You may notice that this actually overrides the matching of the period character, so in order to specifically match a period, you need to escape the dot by using a slash **\.** accordingly.

Below are a couple strings with varying characters but the same length. Try to write a single pattern that can match the first 3 strings, but not the later (to be skipped). You may find that you will have to escape the dot metacharacter to match the period in some of the lines.

Exercise 2: Matching With Wildcards
- Task: Match
- Text: cat.
- Text: 896.
- Text: ?=+.
- Skip abc1

Solution: you can use `...\.` to match the first 3 (wildcard) chars, and escape the final wildcard metacharacter to match the period instead. This ensures that it will not match the '1' in the fourth line.
