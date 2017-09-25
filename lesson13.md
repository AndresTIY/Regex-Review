##Lesson 13: More Group Work

As you saw in the previous lessons, all the quantifiers including the **star, plus, repetition {m,n} and the question mark** can all be used within the capture group patterns. This is the only way to apply quantifiers on sequences of chars instead of the individual chars themselves.

For ex, if I knew that a phone number may or may not contain an area code, the right pattern would test for the existence of the whole group of digits **(\d{3})?** and not the individual chars themselves (which would be wrong).

Depending on the reg exp engine you are using, you can also use non-capturing groups which will allow you to match the group but not have it show up in the results.

Below are a couple diff common display resolutions, try to capture the width and height of each display.

Exercise 13: Matching Nested Groups
- Capture: 1280x730, 1920x1600, 1024x768

Solution: This one is pretty clean, we just need to capture the two groups of digits as such (\d+)x(\d+).
