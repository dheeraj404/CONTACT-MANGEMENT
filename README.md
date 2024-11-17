
# 🚀 Contact Management Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/dheeraj404/CONTACT-MANGEMENT)

## Table of Contents

- [Project Description](#project-description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Database Setup](#database-setup)
- [Database Schema](#database-schema)
- [Technical Decisions](#technical-decisions)
- [Application Overview](#application-overview)
- [Challenges and Solutions](#challenges-and-solutions)
- [License](#license)
- [Contact](#contact)

---

## Project Description

The **Contact Management Application** is a full-stack web application designed to help users efficiently manage their contacts. It offers functionalities such as adding, viewing, editing, deleting, and searching contacts. The application boasts a modern and responsive user interface with features like dark mode and glassmorphism effects, enhancing user experience and visual appeal.

---

## Demo

[Live Demo Link]([https://your-deployed-app-link.com](https://contact-mangement-60j0gb4ed-dheeraj-mauryas-projects.vercel.app/))

![Application Screenshot](./screenshots/app_screenshot.png)



---

## Features

- **Add Contacts:** Users can add new contacts via a modal form with validation.
- **View Contacts:** Displays all contacts in a sortable and paginated table.
- **Edit Contacts:** Allows editing of existing contact details through a modal dialog.
- **Delete Contacts:** Enables removal of contacts with confirmation prompts.
- **Search Contacts:** Provides advanced search functionality across multiple fields.
- **Dark Mode:** Toggle between light and dark themes for better accessibility and user preference.
- **Glassmorphism Design:** Modern UI elements with semi-transparent backgrounds and blur effects.
- **Responsive Design:** Optimized for various screen sizes, ensuring usability across devices.

---

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Material UI (MUI):** A popular React UI framework for implementing Google's Material Design.
- **Axios:** Promise-based HTTP client for making API requests.
- **@fontsource/montserrat:** Self-hosted open-source font for consistent typography.

### Backend

- **Node.js:** JavaScript runtime environment for building scalable network applications.
- **Express.js:** A minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing contact information.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.

### Tools

- **Git:** Version control system.
- **GitHub:** Hosting for version control and collaboration.
- **Postman:** API development and testing tool.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **Yarn**
- **MongoDB** (Local installation or access to a MongoDB Atlas cluster)

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/contact-management-app.git
   cd contact-management-app/backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   or using Yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

   - Replace `your_mongodb_connection_string` with your actual MongoDB URI. If you're using MongoDB Atlas, it will look something like:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/contactDB?retryWrites=true&w=majority
     ```

4. **Run the Backend Server:**

   ```bash
   npm start
   ```

   or using Yarn:

   ```bash
   yarn start
   ```

   The backend server should now be running at `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   or using Yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` directory and add the following variable:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000
   ```

   - Adjust the `REACT_APP_API_BASE_URL` if your backend is hosted elsewhere.

4. **Run the Frontend Application:**

   ```bash
   npm start
   ```

   or using Yarn:

   ```bash
   yarn start
   ```

   The application should now be running at `http://localhost:3000`.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions, feedback, or contributions, please contact:

- **Name:** Dheeraj Kumar Maurya
- **Email:** dheeraj07maurya@gmail.com
- **GitHub:** [yourusername](https://github.com/dheeraj202)
- **LinkedIn:** [Your LinkedIn](https://www.linkedin.com/in/Dheeraj0/)

---
