
# Hi, I'm Alireza Mak! 👋


## 🚀 About Me
I'm a front end developer with 3 year exprience...


# About Project: Books creator Using React typescript

The app is a book creator built with React and TypeScript. Users can add book names through an input field in the CreateBook component, which dynamically updates the interface and sends the book data to a JSON server (db.json). Upon loading the app, it fetches the existing book data from the server. Each book in the list is displayed using the ShowBook component and has features for editing using the EditBook component and deleting. These actions are reflected both in the user interface and on the server side. The application is designed to be fully responsive, adapting to different screen sizes. Additionally, an api.http file is included for making HTTP requests to the API.

Explanation:
The app consists of several components: CreateBook, ShowBook, EditBook, and BookList.

CreateBook component: This component renders an input field where users can enter the name of a book. On submission, it triggers a function to add the book to the interface and send the data to the JSON server using an HTTP POST request.

ShowBook component: This component represents an individual book in the list. It displays the book name and provides options for editing and deleting the book. When a user edits or deletes a book, it triggers functions to update both the user interface and the server data using HTTP PUT and DELETE requests, respectively.

EditBook component: This component is responsible for editing book details. It renders a form with input fields pre-populated with the book's current information. On submission, it triggers a function to update the book data on both the user interface and the server using an HTTP PUT request.

BookList component: This component is responsible for fetching the book data from the server upon app loading. It renders a list of ShowBook components, passing the book data as props.

The app's entry point is the App component, which renders the CreateBook and BookList components. The App component also handles the layout and responsiveness of the application, ensuring it adapts to different screen sizes.

Additionally, a db.json file serves as the server-side storage for book data. The api.http file is provided as a reference for making HTTP requests to the API, allowing you to test and interact with the server endpoints directly.

Overall, this app allows users to create, edit, and delete books. The data is stored both in the user interface and on the server side. It is built with React and TypeScript, designed to be responsive, and uses a JSON server as the backend storage.


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Tech Stack

**Client:** React, Typscript, css

**Server:** Node, Express

**Database:** JSON


## 🛠 Skills
React, Typescript, Javascript, HTML, CSS...


## Support

For support, email Info@alirezamak.com.


## Demo

Insert gif or link to demo


## Authors

- [@Alireza-Mak](https://www.github.com/Alireza-Mak)

## Color Reference

| Color                            | Hex                                                                |
| -----------------              | ------------------------------------------------------------------       |
| Font Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #4A4A4A |
| background color | ![#f8f8f8](https://via.placeholder.com/10/01D1B2?text=+) #01D1B2 |



## Installation

Install my-project with npm

```bash
  git clone https://github.com/Alireza-Mak/Books.git
```
```bash
  npm install my-project
```
```bash
  cd my-project

```
```bash
  npm run server
```
```bash
  npm run start
```

    
![Logo](https://alirezamak.com/wp-content/uploads/fav-icon-final-e1685159385524.png)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://alirezamak.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alireza-mak/)
[![twitter](https://img.shields.io/badge/email-1DA1F2?style=for-the-badge&logo=mail.Ru&logoColor=white)](info@alirezamak.com)


## Screenshots

![App Screenshot](http://alirezamak.com/wp-content/uploads/books-1-scaled.jpg)
![App Screenshot](http://alirezamak.com/wp-content/uploads/books-2-scaled.jpg)
![App Screenshot](http://alirezamak.com/wp-content/uploads/books-3-scaled.jpg)
![App Screenshot](http://alirezamak.com/wp-content/uploads/books-4-scaled.jpg)


## Related

Here are some related projects

[Alireza Challenge](https://github.com/Alireza-Mak/Alireza-Challenge)

[Video Finder](https://github.com/Alireza-Mak/Video-Finder)

