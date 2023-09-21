# chingu-quiz-app-solo-project

A solo project for Chingu!

For the HTML, I structured it with the help of Bootstrap5 since I am still learning CSS and I find hard.

Also a bit challenging is putting the ID's and Values to manipulate it in the JS. Sometimes I do got an error and it's either a typo or case sensitivity LOL.

I use a Bootstrap NavBar that displays the APP NAME and a Home button. Also made it responsive.
Next, for the main content I also use Bootstrap Card for easy structuring and responsiveness
as well as for the buttons and choices.

Lastly and the most important part is the JavaScript

I implemented the Chingu given variables (As my universal variables).

First thing I did is wrapped all of my functions/variables in a document.addEventListener("DOMContentLoaded", function ()){} because as I've read it's a good practice when you are manipulating the DOM.

Next I create my own variables at the top so I can use them in my functions.
Aside from the variables that is already in the HTML, I created an index so I keep track and update the DOM.

After that I created a function for updating the DOM. The question number, the question itself, the buttons with the choices and the Next button that will only appear when you picked a choice.

In Updating the question number I use a textContent property to manipulate the text values in my DOM/HTML with the values given by the const of arrays.

In updating the question, I also use the textContent property and a .value the corresponds for it in the const of arrays.

What I mean is for the questions it's .question , for the choices it's .choices.a and answers is .answer.

So I am done updating the text contents, now I did a function that does not display the Next Button if the user is not picking his choice first. I use the disabled property to disable the button element in my HTML. Then I put some booleans on it so it will trigger when the user picked a choice. Then I use the event object and use it as a parameter in my function.

Then lastly I added the function that let's the user click next to go to the next question.
In that function, I used an if statement that has a conditionals.

lastly, I do a for loop to record the score and show it at the end of the quiz. Then a location.reload property to retry the quiz after clicking the "Retry?" Button.

That is all, first I am sorry for the bad english, it is not my local language.

Also, almost 50% of this code is googled. I just don't memorize every syntax and properties, BUT I know how they work tho.
