##Lesson 11: Match groups
 Reg exp allows us to not just match text but also to **extract information for further processing**. This is done by defining **group of chars** and capturing them using the special parentheses will be **captured** as a group. In practice, this can be used to extract information like phone numbers or emails from all sorts of data.

 Imagine for example that you had a command line tool to list all the image files you have in the cloud. You could then use a pattern such as **^(IMG\d+\.png)$** to capture and extract the full filename, but if you only wanted to capture the filename without the extension, you could use the pattern **^(IMG\d+)\.png$** which only captures the part before the period.

 Go ahead and try to use this to write a reg exp that matches only the filenames (not incl extension) of the PDF files below

 Exercise 11: Matching Groups
 - Capture: file_record_transcript.pdf, file_07241999.pdf
 - Skip: testfile_fake.pdf.tmp

 Solution: We only want to capture lines that start with "file" and have the file extension ".pdf" so we can write a simple pattern that captures everything from the start of "file" to the extension like this `^(file.+)\.pdf$`
