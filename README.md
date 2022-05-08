# Sazid's Laptop Store Client

## Live Site Link
[Sazid's Laptop Store](https://inventory-management-website.web.app/)

## Built with
* [React](https://reactjs.org)
* [React Router](https://reactrouter.com)
* [React Bootstrap](https://react-bootstrap.github.io)
* [Firebase](https://firebase.google.com)
* [React-Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
* [React Hook Form](https://react-hook-form.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

## Website Features
* There is a navbar and a footer with all pages in the website
* The site is fully responsive
* The navbar has dynamic active link styled
* Homepage
    * A banner
    * A section called "inventory" containing 6 inventory products.
        * Each product has a link button called "update" which will take user to the details page of the product which is a protected route(If a user is logged in, s/he can see the details, but if not, s/he can't see them)
        * In the bottom of this section, a button caleed "manage inventories" has added which will take the user to the "inventory page".
    * A section called "people reviews" containing people reviews.
    * A section called "stay in touch" containing a form for getting offers' email
* Inventory Page
    *The Inventory page contains all the products in a tabular format
    * Each product is a row, every row has product id, image, name, description, price, quantity, a delete button and an update button
        * If user clicks on the delete button, the product will be deleted both from the UI and from the database
        * If user clicks on the update button, the button will take him/her to the details page of the product which is private/protected route.
    * There is a button called "Add Items", which will navigate the user to "Add Item" page
* Add Item Page
    * This page is protected and it will not be shown on the navigation if any user is not logged in.
    * The Add Item page has a simple react hook form and a button called "Add item". If user gives all the information correctly, the item will be added both in the UI and on the database
* Sign Up Page
    * There is a sign up page for registering the user on firebase with email/password.
    * If the user is registered, a verification email will be sent to the user's email address.
    * If the user is registered, s/he will be navigated to "login" page
* Login Page
    * There are 2 ways of login, login with registered email/password and google login.
    * If the user clicks on the forgot password link, an email will be sent to the user's email addresss.
    * A logged in user can see many items in the navigation bar like "Manage Items", "Add Items", "My items", his/her email address and a "logout" button
    * If user clicks on the logout button, the user will be logged out
* Blogs Page
    * Blogs Page has the questions answered:
        * Difference between "javascript" and "nodejs"
        * When should you use "nodejs" and when should you use "mongodb"
        * Differences between "sql" and "nosql" databases.
        * What is the purpose of `jwt` and how does it work
