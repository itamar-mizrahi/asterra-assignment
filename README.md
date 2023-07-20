# asterra-assignment
 
https://master.d1ysrn3vt2rhzt.amplifyapp.com/

## Introduction

In this assignment, I was tasked with completing two sets of tasks: a web application with Node.js and React, and some Python programming. The web application involved creating a database, building forms, and deploying the application on AWS.
For the second part, using algorithmic and mathematical tools in Python, for image processing and data presentation trough csv files and excel. 

## MVC in the Server

I used the MVC pattern in the server to keep the code organized and easy to maintain. The MVC pattern separates the presentation layer (React), the data layer (the database), and the business logic layer (Node.js). This made the code much easier to understand and debug.

## Back-End Division

The MVC was divided into four parts: routes, config, queries, and server. The routes part handled the incoming requests from the client and routed them to the appropriate controller. The config part stored the configuration settings for the DB. The queries part handled the database queries. The server part was the main entry point for the application and handled the routing, DB configuration, and queries.

## Front-End Division

The front-end was divided into four components: AddUserForm, AddUserHobbies,UserTable and the App main component. The AddUserForm component responsible for the template of adding user form. The AddUserHobbies responsible for the template of  adding hobbies to the users from a given list. The UsersTable responsible for the template of  the user properties. 
The App main component responsible for interacting with the back-end API and serving the other components combined.

## Responsiveness on the Client

I used CSS media queries to style the application differently for different screen sizes. I also used React hooks to manage the state of the application. This allowed me to update the UI in response to changes in the data without having to re-render the entire application. For example, I used a React hook called useState to keep track of the user's current screen size. This allowed me to change the layout of the application depending on the screen size. I also used a React hook called useEffect to listen for changes in the data and to update the UI accordingly. For example, if the user added a new user to the database, I would use useEffect to update the list of users in the UI.

I believe that the use of React hooks made the application more responsive and easier to maintain.
## python tasks
The Python programming involved calculating final grades for students, creating a random array, and plotting the array as an image. i used the best practices of third-party packages including pandas numpy and pyplot.

## Problems with Connecting to the AWS DB

I had some problems with connecting to the AWS database. I was able to get the database up and running, but I had some trouble getting the application to connect to the database. This made the other tasks more complex to build, because I had to keep the database in mind when I was designing the application.

## Conclusion

Overall, I enjoyed working on this assignment. I learned a lot about the MVC pattern, React, and algorithmic thinking. I also learned how to connect to an AWS database. I would like to thank you for the opportunity to work on this assignment.

## Deployment

The application was deployed using Amplify and can be found on the GitHub repo of the project on the README file.