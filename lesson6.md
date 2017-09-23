##Lesson 6: Catching some zzz's

*Note: some parts of the repetition syntax below isn't supported in all regular expression implementations.*

We've so far learned how to specify the range of characters we want to match, but how about the number of **repetitions** of characters that we want to match? One way that we can do this is to explicitly spell out exactly how many characters we want, eg. **\d\d\d** which would match exactly three digits.

A more convenient way is to specify how many repetitions of each character we want using the **curly brace** notation. For example, a **a{3}** will match the a character exactly 3 times. Certain reg ex engines will even allow you to specify a range for this repetition such that **a{1,3}** will match the a character no more than 3 times, but no less than once for example.

This quantifier can be used with any character, or special metacharacters, for example **w{3}** (three w's), **[wxy]{5}** (five chars, each of which can be a w, x, or y) and **.{2,6}** (between two and six of **any** char).

In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang "wazzup?". Try writing a pattern that matches only the first two spellings by using the curly brace notation above.

Exercise 6: Matching Repeated Chars
- Match: wazzzzzup, wazzzup
- Skip: wazup

Solution: There are a couple 'z's in the first two lines we have to match, so the expression `waz{3,5}up` will match all strings with that many 'z's
