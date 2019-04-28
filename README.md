# Friend Finder Node App
##Overview
Compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match in a modal form.

## Note to users
Data is not persisted. Except a few seed input all input will be cleared from cache when the app is restarted.

## How to use Friend Finder
Navigate to `https://git.heroku.com/secure-everglades-75450.git` you will see the follwoing home page:

![Friend Finder Home Page](/image/HomePage.png)

Once on the home page, click on the `Go to Survey` to take the survey which looks like as follows:

![Friend Finder Survey Page](/image/SurveyPage.png)

If you are the first one to take the survey you will get no match. 
The match returned is the one with the closest score difference. 
As the data point increase it gets more accurate.

### Technology
* Express.js
* JavaScript
* Node Package Manager (npm)