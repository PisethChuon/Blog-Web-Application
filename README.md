# Blog Web Application

A simple blog web application built using Node.js, Express.js, and EJS. This application allows users to create, view, edit, and delete blog posts. No database is used in this version, so posts will not persist between sessions.

## Features

**Post Creation:** Users can create new blog posts.
**Post Viewing:** The home page displays all existing blog posts.
**Post Update/Delete:** Users can edit and delete their posts.
**Styling:** The application is styled for a good user experience on both desktop and mobile devices.

## Technical Requirements

**Node.js & Express.js:** The application is a web server built using Node.js and Express.js. Express.js handles routing and middleware.
**EJS:** EJS is used as the templating engine to generate dynamic HTML based on the application's state.

## Project Structure

/blog-app
|-- /views
|-- index.ejs // Home page to display all posts
|-- new.ejs // Page for creating a new post
|-- edit.ejs // Page for editing a post
|-- /public
|-- /css
|-- style.css // Styling for the application
|-- app.js // Main entry point for your Node.js application
​

## Getting Started

Follow these steps to get the Blog web application up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/blog-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd blog-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

4. **Start the application:**

    ```bash
    node app.js
    ```

5. **Open your browser:**

    Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Blog web application.

### Usage

- **Create a new post:**
  - Click on "Create New Post" on the home page.
  - Fill in the title and content, then click "Create Post."

- **Edit a post:**
  - Click on "Edit" next to the post you want to edit.
  - Make your changes and click "Update Post."

- **Delete a post:**
  - Click on "Delete" next to the post you want to delete.

### Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow the [contributing guidelines](CONTRIBUTING.md).

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

