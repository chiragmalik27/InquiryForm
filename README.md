# InquiryForm 📝

![HTML](https://img.shields.io/badge/-HTML-red)
![CSS](https://img.shields.io/badge/-CSS-blue)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)
![Express.js](https://img.shields.io/badge/-Express.js-lightgrey)

InquiryForm is a simple web application that allows users to submit inquiries through a form. The data is then sent to a server where it can be stored and retrieved. It is just a simple project made by my friend and me for fun, adding all what we learn

## Project Structure 📂

```
Project Root
│
├───Backend
│   │   server.js
│   │
│   └───routes
│       │   userRoutes.js
│
└───Frontend
    │   form.css
    │   index.html
```

## Tech Stack 💻

- Frontend: HTML, CSS
- Backend: Node.js, Express.js

## Routes 🚦

- `GET /`: Serves the main form to the user.
- `POST /inquiry`: Receives data from the form and stores it.
- `GET /inquiries`: Returns all stored inquiries.

## Screenshots 📸

# _Data received from the form_

![Data Received](https://github.com/chiragmalik27/InquiryForm/blob/main/Data%20Recived.png)

# _Layout of the form_

![Form Layout](https://github.com/chiragmalik27/InquiryForm/blob/main/Form%20Layout.png)

## Getting Started 🚀

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/chiragmalik27/InquiryForm.git
cd InquiryForm/Backend
npm install
```

Then, start the server:

```bash
node server.js
```

Open your browser and navigate to `http://localhost:3000` to see the form.
