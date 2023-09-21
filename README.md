[![freeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)](https://www.freecodecamp.org/)

<p style="text-align: center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript"/></a>
  <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a>
  <a href="https://npmjs.com"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" /></a>
  <a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" /></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
  <a href="https://babeljs.io"><img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" alt="Babel" /></a>
  <a href="https://eslint.org"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /></a>
  <a href="https://prettier.io"><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" /></a>
</p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Microservices with Express Application

This project is an integral component of the 'Backend Development and API' certification program offered by
freeCodeCamp. For comprehensive details on each project requirement, please refer to the following links:

[Timestamp Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)<br>
[Request Header Parser Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)<br>
[URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)<br>
[Exercise Tracker Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker)<br>
[File Metadata Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice)

## Design Patterns

In this project, I have chosen to implement the Model-Service-Controller (MSC) design pattern. While the project
requirements do not mandate a complex design pattern, I have opted for this approach to familiarize myself with
industry-standard practices and to challenge myself to grow as a developer. I acknowledge that there may be
opportunities for improvement in this project, and I wholeheartedly welcome any feedback or suggestions you may have.
Your input is invaluable not only for the project but also for my personal growth and development as a developer.

## Setup

This project relies on MongoDB Atlas cloud instances for managing resources such as `/shorturl` and `/users`. If you
intend to clone this repository and run it locally, please follow these steps:

1. Create a MongoDB Atlas Account: To get started, you'll need to create an account on MongoDB Atlas, and the good news
   is, it's absolutely free! You can follow the step-by-step instructions in the
   [MongoDB Atlas Tutorial – How to Get Started](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)
   provided by freeCodeCamp to set up your own cluster.
2. Configure Your Environment Variables: After setting up your MongoDB Atlas cluster, you'll need to configure your
   environment variables. To do this, rename the `.env.sample` file in your project directory to `.env`. Then, open the
   `.env` file and insert the MongoDB URI from your Atlas cluster.

Here's what it should look like:

```dotenv
# Database variables
MONGODB_ATLAS_URI=mongodb+srv://<MONGODB_USER>:<MONGODB_PASSWORD>@<MONGODB_CLUSTER_HOST>/<MONGODB_DB_NAME>?retryWrites=true&w=majority
```

Note: In the example snippet above, you'll notice that the URI includes a database name. While this field is technically
optional, it's highly recommended that you create your own database instance on your MongoDB Atlas cluster. This
practice helps maintain organization and clarity in your project.

## Running the application

To run the express application, do follow the following steps

1. Clone the repo:
   ```git
   git clone git@github.com:mrarvind90/fcc-backend-api-projects.git
   ```
2. Navigate to the repository:
    ```shell
    cd <repository_directory>
    ```
    Change <repository_directory> to the name of the cloned directory.
3. Install Dependencies:
    ```shell
    npm install
    ```
    This command will install all the necessary dependencies for the application.
4. Configure Environment Variables: Rename the .env.sample file in your project directory to .env and update it with the
   relevant credentials:
    ```shell
     cp .env.example .env
    ```
5. Choose Your Run Mode:<br>
    - Development Mode (with automatic code reload):<br> To run the application in watch mode, enabling seamless source
      code changes without manual server restarts, use the following command:
    ```shell
     npm run dev
    ```
    - Standard Server Mode:<br> If you prefer to simply run the server without automatic code reloading, you can use the
      following command:
    ```shell
     npm run start
    ```

## Future Improvements

While developing this project, there are several areas I plan to focus on for enhancements and refinements 
which can be found on [GitHub](https://github.com/mrarvind90/fcc-backend-api-projects/issues).

