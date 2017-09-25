##Lesson 10: Starting and ending   

So far we've been writing regexp that partially match pieces across all the text. Sometimes this isn't desirable, imagine for example we wanted to match the word "success" in a log file. We certainly don't want that pattern to match a line that says "Error: unsuccessful operation!" That is why it is often **best practice to write as specific reg exp as possible** to ensure that we don't get false positives when matching against real world text.

One way to tighten our patterns is to define a pattern that describes both the **start and end of the line** using the special **^** (hat) and **$** (dollar sign) metachars. In the ex above, we can use the pattern **^success** to match **only** a line that begins with the word "success", not not the entire error line. And if you combine both the hat and dollar sign, you create a pattern that matches the whole line completely at the beginning and end.

Note that this is diff than the hat used inside a bracket **[^...]** for excluding chars, which can be confusing when reading reg exp. Try to match each of the strings below using these new special chars.

Exercise 10: Matching lines
- Match: Mission: successful
- Skip: Last Mission: unsuccessful, Next Mission: successful upon capture of target

Solution: The expression 'Mission: successful' will match anywhere in the text, so we need to use the starting and ending anchors in an expression ^Mission: successful$ to only match the full string that starts with 'Mission' and ends with 'successful'.
