##Lesson 12: Nested Groups

When you are working with complex data, you can easily find yourself having to extract multiple layers of information, which can result in nested groups. Generally, the results of the captured groups are in the order in which they are defined (in order by open parenthesis).

Take the example from the previous lesson, of capturing the filenames of all the image files you have in a list. If each of these image files had a sequential picture number in the filename, you could extract both the filename and the picture number using the same pattern by writing an expression like **^(IMG(\d+))\.png$** (using a nested paranthesis to capture the digits).

The nested groups are read from left to right in the pattern, with the first capture group being the contents of the first parantheses group, etc.

For the following strings, write an exp that matches and **captures** both the full date, as well as the year of the data.

Exercise 12: Matching Nested Groups
- Capture: Jan 1987, May 1969, Aug 2011

Solution: This exp requires capturing two parts of the data, both the year and the whole date. This requires nested capture groups. `(\w+ (\d+))`

\w is the word metachar
