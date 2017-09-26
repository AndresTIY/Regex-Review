##Lesson 15: Other Special Chars

This lesson will cover some extra metachars, as well as the results of captured groups.

We have already learned the most common metachars to capture digits using **\d**, whitespace using **\s**, and alphanumeric letters and digits using **\w**, but reg exp also provides a way of specifying the opposite sets of each of these metachars by using their upper case letters. For example, **\D** represents any **non-digit** char, **\S** any **non-whitespace** char, and **\W** any **non-alphanumeric char** (such as punctuation). Depending on how you  compose your reg exp, it may be easier to use one or the other.

Additionally, there is a special metachar **\b** which matches the boundary between a word and a non-word char. It's most useful in capturing entire words (for ex by using the pattern **\w+\b**)

One concept that we will not explore in great detail in these lessons is **back referencing**, mostly because it varies depending on the implementation. However many systems allow you to reference your captured groups by using **\-** usually the full matched text, **\1** group 1, **\2** group 2, etc. This is useful for ex when you are in a text editor and doing a search and replace using reg exp to swap two numbers, you can search for "(\d+)-(\d+)" and replace it with "\2-\1" to put the second captured number first, and the first captured number second for example.

Exercise 15: Matching Other Special Chars
- Match: The quick brown fox jumps over the lazy dog
- Match: There were 614 instances of students getting 90.0% or above
- Match: The FCC had to censor the network for saying &$#*A!.
