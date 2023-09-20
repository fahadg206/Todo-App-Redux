# Todo Application

- A Todo app created using React Redux that allows a user to create a personal todolist that can only be managed by the user via Google OAuth Athentication. A user can create, edit, or delete a todo depending if they have access to that todo via Google login. 

## Project Goals

- This project allowed me to get experience using OAuth Athentication. Also, I was able to create my own backend using JSON Server, where all the todos from the user were stored with their Google user ID attached to each todo. I also had experience REST conventions by making GET, POST, PATCH, and DELETE requests to my JSON Server backend where the todos were stored.

## How the app works

- A user can create a todolist. However, if a user would like to manage their todos such as edit or delete them, they must sign in via Google because each todo created has the users Google ID attached to them. If a user signs out after making a todo, any other user can not edit or delete their todos. 

## Technologies Used

- React, Redux, OAuth, JSON Server API, JavaScript, HTML, CSS, Axios

## Quick Start

1. Download zip file or clone the repository on your local machine, and open it up in your code editor.
3. Cd into the client folder & Run **npm start** on the **client** folder.
4. Open a new terminal, cd into the api folder and run **npm start** on the **api** folder


## How to run app in the browser
- Login via Google on the **upper right** hand corner so that you will be able to manage your own todos.

