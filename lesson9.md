##Lesson 9: All this whitespace

When dealing with real-world input, such as log files and even user input, it's difficult not to encounter whitespace. We use it to format pieces of info to make it easier to read and scan visually and a single space can put a wrench into the simplest regex.

The most common forms of whitespace you will use with regex are the **space (_)**, the **tab(\t)**, the **new line (\n)** and the carriage return **(\r)** (useful in WIndows environments), and these special chars match each of their respective whitespaces. In addition a **whitespace** special char **\s** will match **any** of the specific whitespaces above and is extremely useful when dealing with raw input text.

In the strings below, you'll find that the content of ech line is indented by some whitespace from the index of the line (**the number is a part of the text to match**). Try writing a pattern that can match each line regardless of how much whitespace is between the number and the content. Notice that the whitespace chars are just like any other char and the special metachars like the star and the plus can be used as well

Exercise 9: Matching Whitespaces
- Match: 1.   abc, 2.    abc, 3.      abc
- Skip: 4.abc

Solution: We have to match only the lines that have a space between the list number of 'abc'. We can do that by using the exp `\d\.\s+abc` to match the number, the actual period (which must be escaped), or one or more whitespace chars then the text.

If we had used the Kleene star instead of the plus, we would also match the fourth line, which we actually want to skip.
