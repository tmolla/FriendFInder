# Friend Finder Node App
## Overview
Compatibility-based "Friend Finder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Note to users
Data is not persisted. All user entered informaiton will be cleared from cache when the app is restarted.

## How to use Friend Finder
Navigate to `https://git.heroku.com/secure-everglades-75450.git` you will see the follwoing home page:

![Friend Finder Home Page](/image/HomePage.png)

Once on the home page, click on the `Go to Survey` button to take the survey which looks like as follows:

![Friend Finder Survey Page](/image/SurveyPage.png)

If you are the first one to take the survey, you will have no match but your information will be saved for future match. 
The match returned is a user with a score closest to yours.
As the data point increases, the match becomes more accurate.

In addition to matching friends, Friend Finder also exposes a REST API for getting all people saved in memeory. 
You can click on `API Friends List` link found at the footer section of either the Home or Survey page to get a list firends returned.  

### Technology used
* Express.js
* JavaScript
* Node Package Manager (npm)