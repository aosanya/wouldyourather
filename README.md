# wouldyourather
Udacity React-Redux Evaluation Project

#Cloning
To clone this project from github, use the following link:
https://github.com/aosanya/wouldyourather.git

#Or Download Zip
To download the project from github, use the following link:
https://github.com/aosanya/wouldyourather/archive/master.zip

# Installation
* install all project dependencies with `npm install`

# Start App
* start the server with `npm start`

# App Functionality
The person using your application can impersonate an existing user. In the /login path there is a login box that lets the user select a name from the list of existing users. Once the user logs in, the home page should be shown.

The information about the logged in user appears on the top right of all pages. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions is shown by default.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question has a "View Poll" link to the details of that poll. The details of each poll are available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user has an avatar and has a tick sign.

The application shows a 404 page if the user is trying to access a poll that does not exist. A navigation bar is displayed so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question appears in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions is available at the /add route and via the "New Question" link in the nav bar. The application shows the text “Would You Rather” and has a form for creating two options. Upon submitting the form, a new poll is created, the user is taken to the home page, and the new polling question appears in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! The application has a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard contains the following:

User’s name;
User’s picture;
Number of questions the user asked; and
Number of questions the user answered
Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user is able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both via the nav bar and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user.