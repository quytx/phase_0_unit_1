#### Include an inline screenshot of your codeschool's points from the profile page:
![alt tag](http://i.minus.com/i2jBegSKojN57.png)
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

* What's the quick key for your OS to spawn the Dev Tools inspector?

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
* =======================================================================================================================
##ANSWER
* HTML & CSS can be edited using Sources tab and Styles tab (by modifying the code)
* Javascript can be debugged by using Sources tab to trace the code (bugs will be hightlighted)
* Performance Oprimization can be done with the help of using Network tab to see how many elements there are, how big each element is and how long it takes to load each element, etc.
* On Windows the hot key is Ctrl + Shift + I
* -----------------------------------------
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
* + Background color is #0b0f11
* New design: (with mouse over the last link)
![alt tag](http://i.minus.com/ioi9m8gjTrXTx.png)
------------------------------------------------
* We cannot tweak the color of the text "The most important things are not things" because it is not texts - it's embedded in the image http://www.postmachina.com/images/home_bg.gif as a single entity
* -------------------------------------------------
* The largest (size) image is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png. I found out using the Network tab and sort the size from descending order.
![alt tag](http://i.minus.com/ibmT1MxjHJxplA.png)
*-------------------------------------------------------
* The easiest way to optimize the website to me, is to remove the redirects to facebook page
* https://www.facebook.com/plugins/like.php?href=http://ticketplatform.com/&layout=standard&show_faces=false&width=450&action=like&colorscheme=light&height=35
* https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fticketplatform.com%2F&layout=standard&show_faces=false&width=450&action=like&colorscheme=light&height=35
* This is, however, may not be what we would want to remove, since it is a marketing tool.
