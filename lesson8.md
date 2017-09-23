##Lesson 8: Characters Optional

As you saw in the previous lesson, the Kleene star and plus allow us to match repeated chars in a line.

Another quantifier that is really common when matching and extracting text is the **?** (question mark) metachar which denotes **optionality**. This metachar allows you to match either zero or one of the preceding char or group. For ex, the patter **ab?c** will match either the strings "abc" or "ac" because the b is considered optional.

Similar to the dot metachar, the question mark is a special char and you will have to escape it using a \? to match a plain question mark char in a string.

In the strings below, notice how the plurality of the word "file" depends on the number of files found. Try writing a pattern that uses the optionality metachar to match only the lines where one or more files were found.

Exercise 8: Matching Optional Chars

- Match: **1** file found?, **2** files found?, **24** files found?
- Skip: No files found.

Solution: We can use the meta-char `\d` to match the number of files and use the expression `\d+ files? found\?` to match all the lines where files were found.

Note that the first question mark applies to the preceding 's' char (for plurality), and the actual question mark at the end must be escaped to match the text.

\d+ is matching 1 or more digits
files? is matching file and files. ? allows you to match either zero or one of the preceding char or group. 
