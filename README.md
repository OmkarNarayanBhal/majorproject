# StayHub

A web application built with MongoDB, Node.js, Express, CSS, and EJS, featuring authentication, authorization, and image storage using Cloudinary.

## Table of Contents

•⁠  ⁠[Introduction](#introduction)
•⁠  ⁠[Features](#features)
•⁠  ⁠[Technologies Used](#technologies-used)
•⁠  ⁠[Installation](#installation)
•⁠  ⁠[Usage](#usage)
•⁠  ⁠[Contributing](#contributing)
•⁠  ⁠[License](#license)

## Introduction

This project is a full-stack web application that demonstrates the use of MongoDB(mongo_ATLS) for data storage,
Cloudinary for image management, and a variety of npm packages to facilitate development.
The application includes robust authentication and authorization mechanisms, as well as server-side and client-side validation.

## Features

•⁠  ⁠User authentication and authorization
•⁠  ⁠Image upload and storage with Cloudinary
•⁠  ⁠Data storage with MongoDB Atlas
•⁠  ⁠Server-side and client-side validation
•⁠  ⁠Responsive design

## Technologies Used

•⁠  ⁠Node.js
•⁠  ⁠Express
•⁠  ⁠MongoDB (MongoDB Atlas)
•⁠  ⁠Cloudinary
•⁠  ⁠EJS
•⁠  ⁠CSS

### NPM Packages

•⁠  ⁠⁠ cloudinary ⁠
•⁠  ⁠⁠ connect-flash ⁠
•⁠  ⁠⁠ connect-mongo ⁠
•⁠  ⁠⁠ cookie-parser ⁠
•⁠  ⁠⁠ dotenv ⁠
•⁠  ⁠⁠ ejs ⁠
•⁠  ⁠⁠ ejs-mate ⁠
•⁠  ⁠⁠ express ⁠
•⁠  ⁠⁠ express-session ⁠
•⁠  ⁠⁠ flash ⁠
•⁠  ⁠⁠ install ⁠
•⁠  ⁠⁠ joi ⁠
•⁠  ⁠⁠ method-override ⁠
•⁠  ⁠⁠ mongoose ⁠
•⁠  ⁠⁠ multer ⁠
•⁠  ⁠⁠ multer-storage-cloudinary ⁠
•⁠  ⁠⁠ nodemon ⁠
•⁠  ⁠⁠ passport ⁠
•⁠  ⁠⁠ passport-local ⁠
•⁠  ⁠⁠ passport-local-mongoose ⁠

## Installation

1.⁠ ⁠Clone the repository:
   ⁠ bash
   git https://github.com/OmkarNarayanBhal/majorproject.git
   cd majorproject.git
    ⁠

2.⁠ ⁠Install dependencies:
   ⁠ bash
   npm install
    ⁠

3.⁠ ⁠Create a ⁠ .env ⁠ file in the root directory and add your environment variables:
   ⁠ bash
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   DATABASE_URL=your_mongodb_atlas_url
   SECRET=your_session_secret
    ⁠

4.⁠ ⁠Start the application:
   ⁠ bash
   nodemon app.js
    ⁠

## Usage

1.⁠ ⁠Register a new account or log in with existing credentials.
2.⁠ ⁠Upload images which will be stored in Cloudinary.
3.⁠ ⁠Interact with the application according to the provided features.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
