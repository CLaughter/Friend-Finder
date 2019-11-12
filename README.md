Heroku Deployed Link: https://

Instructions

The survey lists 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The server.js file requires npm packages express and path.

The htmlRoutes.js file includes two routes:

A GET Route to /survey displays the survey page. A default, catch-all route leads to home.html displaying the home page.

The apiRoutes.js file contain two routes:

A GET route with the url /api/friends and will display a JSON of all possible friends. A POST routes /api/friends is used to handle incoming survey results. This route will also be used to handle the compatibility logic.

The application data is saved inside app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

{ "name":"Ahmed", "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ] }

Determine the user's most compatible friend using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

 no negative solutions will result as the absolute value of the difference is created. The closest match will be the user with the least amount of difference.

Once the current user's most compatible friend is found, the app will display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.