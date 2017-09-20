## Lesson 4: Excluding Specific chars

In some cases, we might know that there are specific chars that we don't want to match too, for example, we might only want to match phone numbers that are not from the area code 650.

To represent this, we use a similar expression that excludes specific chars using the square brackets and the ^ (hat). For example, the pattern [^abc] will match any single char except for the letters a b or c.

With the strings below, try writing a pattern that matches only the live animals (hog, dog, but not bog). Notice how most patterns of this type can also be written using the technique from the last lesson as they are really two sides of the same coin. By having both choices, you can decide which one is easier to write and understand when composing your own patterns.

Exercise 4: Excluding chars
- Task: Match hog, dog
- Skip: bog

Solution: The simplist solution to match any line that ends in 'og' but is not 'bog' would be the expression `[^b]og`. Alternatively, you could use what we learned from the previous lesson and use `[hd]og` to match 'hog' and 'dog'. Note that it is slightly more restrictive expression because it limites the strings it can match.
