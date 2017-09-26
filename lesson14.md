##Lesson 14: It's all conditional

As we mentioned before, it's always good to be precise, and that applies to coding, talking, and even reg exp. For ex, you wouldn't write a grocery list for someone to **Buy more .*** because you would have no idea what you could get back. Instead you would write **Buy more milk** or **Buy more bread**, and in reg exp, we can actually define these conditionals explicitly.

Specifically when using groups, you can use the **|** (logical OR, aka. the pipe) to denote **different possible sets of characters**. In the above ex, I can write the pattern "Buy more (milk|bread|juice)" to match only the strings Buy more milk, Buy more bread, or Buy more juice.

Like normal groups, you can use any sequence of chars or metachars in a condition, for ex, ([cb]ats*|[dh]ogs?) would match either cats or bats, or, dogs or hogs. Writing patterns with many conditions can be hard to read, so you should consider making them separate patterns if they get too complex.

Exercise 14: Matching Conditional Text
 - Match: I love cats, I love dogs
 - Skip: I love logs, I love cogs

 Solution: By using the logical or, we can match the first two lines by using the expression I love (cats|dogs). But logs and cogs are pretty cool too.
