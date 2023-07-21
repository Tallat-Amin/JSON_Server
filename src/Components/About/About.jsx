// import styles from "./about.module.scss";
// import Books from "./Books";
// import { userParams } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>
        <h1>Project Description</h1>
        <p>
          This project is a Contact Management System built using React.js and
          Axios. It allows users to manage their contacts by adding, editing,
          and deleting contact information. The system interacts with a backend
          API to perform CRUD operations on the contact data.
        </p>
        <p>
          Features of the Contact Management System include:
          <br />
          <span>Add new contacts with their name and email.</span>
          <br />
          <span>Edit existing contact information.</span>
          <br />
          <span>Delete contacts from the system.</span>
          <br />
          <span>View a list of all contacts with their details.</span>
          <br />
          <span>Search for contacts by name or email.</span>
        </p>
        <p>
          The project uses React.js for building the user interface and state
          management. It makes HTTP requests to a backend API using Axios to
          perform CRUD operations on the contact data stored on the server. The
          API endpoints allow for creating, reading, updating, and deleting
          contact information.
        </p>
        <p>
          The application uses the Modal component to display the edit form for
          updating contact information. The form is pre-populated with the
          current data for the selected contact, and the user can make changes
          and save them to update the contact.
        </p>
        <p>
          The styling of the application is done using SCSS (Sass) for custom
          styles and design. The design is kept simple and user-friendly for
          easy navigation and usage.
        </p>
        <p>
          The Contact Management System is a practical and efficient way for
          users to manage their contacts, making it easier to keep track of
          essential information and maintain a well-organized contact list.
        </p>
      </div>
      {/*<Books />*/}
    </>
  );
};

export default About;
