# Project Overview

This repository contains solutions for three different tasks: a responsive registration form, anagram detection, and array manipulation. Each task is implemented in its own folder or file.

## Tasks

### 1. Array Manipulation

#### File: `arrayManipulation.java`

This task involves writing a Java program to perform various manipulations on an array. The manipulations include:

- **Functionality**:
  - Adding elements to the array.
  - Removing elements from the array.
  - Finding the maximum and minimum elements in the array.
  - Sorting the array.
  - Other common array operations.

### 2. Anagram Detection

#### File: `anagramDetection.java`

This task involves writing a Java program to detect if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

- **Functionality**:
  - The program takes two strings as input.
  - It checks if the strings are anagrams of each other.
  - Outputs `true` if they are anagrams and `false` otherwise.

### 3. Responsive Registration Form

#### Directory: `responsive-form`

This task involves creating a responsive registration form using HTML, CSS (Tailwind CSS), and JavaScript (React and Redux). The form includes the following features:

- **Form Fields**:
  - Full Name
  - Phone
  - Email
  - Date of Birth
  - Password
  - Confirm Password
- **Form Validation**:
  - Full Name: Required field.
  - Phone: Must contain only numbers.
  - Email: Must be a valid email address.
  - Date of Birth: Users must be at least 17 years old.
  - Password: Must be between 6 to 12 characters.
  - Confirm Password: Must match the password.
- **State Management**: Redux is used to manage the form data.
- **Styling and Responsiveness**: Tailwind CSS is used for styling and ensuring the form is responsive across different screen sizes.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Node.js](https://nodejs.org/) (for the responsive registration form)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for the responsive registration form)

### Installation and Running

#### Java Programs

1. Compile the Java files:
    ```bash
    javac arrayManipulation.java
    javac anagramDetection.java

2. Run the Java programs:
    ```bash
    java arrayManipulation
    java anagramDetection

#### Responsive Registration Form

1. Navigate to the `responsive-form` directory:
   ```bash
   cd responsive-form

2. Install the depedencies:
   ```bash
   npm install
   # or
   yarn install

3. Start the application
    ```bash
    npm start
    # or 
    yarn start

4. Open http://localhost:3000 to view it in your browser.

## Preview

### Java Programs

1. Array Manipulation
![arrayManipulationPreview](https://github.com/fawwazalifiofarsa/tg-technical-test/assets/88119082/f9ce2842-fa4b-4f27-9dbc-1f079f42277b)

2. Anagram Detection
![anagramDetectionPreview](https://github.com/fawwazalifiofarsa/tg-technical-test/assets/88119082/f7349bcf-1c1b-4ce8-862e-6e160c2d05c1)

### Responsive Registration Form
You can preview the application live at the following link: [Registration Form Preview](https://tg-technical-test.vercel.app/)


