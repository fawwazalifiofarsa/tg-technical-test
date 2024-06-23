# Registration Form Application

This is a simple registration form application built using React, Redux for state management, and Tailwind CSS for styling and responsiveness.

## Features

- **React**: The core of the application is built with React, a JavaScript library for building user interfaces.
- **Redux**: State management is handled by Redux, allowing us to store and manage the form data effectively.
- **Tailwind CSS**: Styling and responsiveness are achieved using Tailwind CSS, a utility-first CSS framework.

## Usage
The application consists of a registration form with the following fields:
- Full Name
- Phone
- Email
- Date of Birth
- Password
- Confirm Password

### Form Validation
The form includes validation for each field:
- **Full Name**: Must contain only alphabets.
- **Phone**: Must contain only numbers.
- **Email**: Must be a valid email address.
- **Date of Birth**: Users must be at least 17 years old.
- **Password**: Must be between 8 to 16 characters.
- **Confirm Password**: Must match the password.

### State Management
The form data is managed using Redux. The form values are stored in the Redux store, and actions are dispatched to update the state as the user interacts with the form.

### Styling and Responsiveness
The application is styled using Tailwind CSS. Responsive design is achieved by using Tailwind's utility classes for different breakpoints.

## Preview
You can preview the application live at the following link: [Registration Form Preview](https://tg-technical-test.vercel.app/)
