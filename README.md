# COMPX222As2 
COMPX222 Assignment 2
Marks:20%
Due: 1st September 2023, 5 PM.
For this assignment you will create an interactive website using HTML, CSS and Javascript.
The aim is to code everything yourself so you understand how it works. Therefore, you are
not permitted to use any tools like Dreamweaver or similar that automatically generate
HTML, or to use external libraries. You should ensure all code that you do create is
formatted tidily and is easily readable with comments and appropriate indentation.
In this assignment, the aim is to practice Javascript and DOM programming by constructing
a useful web application. Unlike the previous assignment where you created several static
web pages, this will be a single page website in which all the content display will be
controlled using Javascript. As such, you must use DOM methods to hide, change and
reveal parts of the webpage as they are needed.
To get started, please study the Wikipedia page on Framingham Risk Score . The
Framingham Risk Score is an equation for estimating the risk of coronary heart disease
for a person over the next 10 years. The input is a series of questions about lifestyle and the
results of blood tests, and the output is a percentage risk of heart disease. To complicate
matters, the calculations are different for males vs. females.
The section “Scoring” of the Wikipedia page explains how to calculate the output of the
calculator from the inputs. Essentially, the answer to each input question gives a score that
is then added to a sum over all scores, and finally converted to a percentage. For example,
let’s take a 47 year old female (3 points) with total cholesterol 250 mg/dl (8 points) and HDL
cholesterol 57 mg/dl (0 points) who is not a smoker (0 points), with treated blood pressure
of 145 mm Hg (5 points). The total score for this individual is 3+8+0+0+5=16, which gives a
10 year risk of 4%.
You task is to implement a single page website enabling people to enter their details and
then presenting the results of the Framingham Risk Score calculation. The website should
comprise a folder with a single HTML page called index.html, a style file, and external
Javascript file. There are a few catches in the requirements though.
Requirements:
• The calculator should operate exactly as the “Scoring” section of the Wikipedia page
describes it; this means different calculations for male and female.
• Devise a nice style for the calculator; marks will be given for a professional looking
presentation.
• Even though you are implementing only a single web page, to the user it should
appear to be a website with multiple pages. You should appear to have a separate
page for
(i) age/gender input,
(ii) cholesterol inputs
(iii) smoking status input,
(iv) blood pressure input, and
(v) the final risk score output.
• The pages may be connected with previous/restart/next buttons. This illusion of
multiple pages can be created using javascript and DOM. There are several ways to
achieve this functionality; figure these out for yourself.
• Explore different controls for getting user inputs. For example, when inputting age, a
slider is much more sensible and usable than a text box. A mixture of sensible
controls is required. Marks will be deducted for controls that don’t make sense.
Marking
Marks will be allocated as follows: 10 marks for the use of DOM to implement the site as a
single HTML page; 5 marks for using Javascript to implement the calculator properly; 3
marks for professional CSS design; 2 marks for sensible use of controls
Submission
Please zip your website up into a single file and submit it via moodle before the due date.