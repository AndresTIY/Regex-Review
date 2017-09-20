## Lesson 3: Matching Specific Characters

The dot metacharacter from the last lesson is pretty powerful, but sometimes **too** powerful. If we are matching phone numbers for example, we don't want to validate letters "(abc)def-ghij" as being a valid number.

There is a method for **matching specific characters** using regular expressions, by defining them inside **square brackets.** For example, the patter [abc] will only match a **single** a, b, or c letter and nothing else.

Below are a couple lines, where we only want to match the first three strings, but not the last three strings. Notice how we can't avoid matching the last three strings if we used the dot, but have to specifically define what letters to match using the notation above.

Exercise 3: Matching Chars.
- Task: Match
- Text: can, man, fan
- Skip: dan, ran, pan

Solution:
You can use the expression `[cmf]an` to match only 'can', 'man', and 'fan' without matching any other line. As you will see in the next lesson, you can also use the inverse expression `[^drp]an` to match any three letter word ending with `an` that does not start with 'd', 'r', or 'p'.
