
### Node.js Authentication System

# A complete authentication system built with Node.js, Express, MongoDB, and Passport.js that supports:

- Local authentication (email/password)

- Google OAuth 2.0 authentication

- Session management

- User profile management

Creating a fully functional web application with all these features would require significant coding and involve multiple technologies and tools. Here, I'll provide you with a high-level overview of the steps and technologies you can use to implement each of these features:

1. Sign up with email:
Create a registration form in HTML with fields like email, password, and password confirmation.
Use a back-end framework like Node.js with Express or Django for Python to handle the form submission.
Hash and store the password securely in a database (e.g., PostgreSQL or MongoDB).
Validate user input and handle errors, such as unmatching passwords.

3. Sign in:
Create a login form in HTML with fields for email and password.
Implement server-side authentication logic.
Redirect the user to a blank home page after successful login.
3. Sign out:
Implement a sign-out button that clears the user's session or token on the server.


4. Password Encryption:

Use a secure hashing algorithm like bcrypt to encrypt and store passwords in the database.

5. Google Login/Signup (Social Authentication):

Implement OAuth 2.0 authentication using a library like Passport.js for Node.js.
Allow users to sign up/in with their Google accounts.
6. Forgot Password (Bonus Feature):

Provide a "Forgot Password" link on the login page.
Implement a functionality to generate a random temporary password or send a password reset link via email.
Include an expiration time for the reset token.
7. Display Notifications:

Use JavaScript and CSS to display notifications for unmatching passwords during sign-up and incorrect passwords during sign-in.
8. Enable reCAPTCHA (Extra Points):

Integrate Google reCAPTCHA in your sign-up and login forms to prevent automated bots from spamming your application.

![image](https://github.com/user-attachments/assets/643e3ce8-cb00-44df-a5d3-fb71707dc81d)

Security features

Features
✅ Authentication Methods

Email/password login

Google OAuth login

Secure password reset

🔐 Security Features

Password hashing with bcrypt

Session management

CSRF protection

Login activity tracking

Failed attempt logging

📊 User Dashboard

Profile management

Activity logs

Security status monitoring

Account statistics

Technologies Used
Backend: Node.js, Express

Database: MongoDB (with Mongoose)

Authentication: Passport.js

Frontend: Bootstrap 5, EJS templates

Other: bcryptjs, express-session, connect-mongo

This project is licensed under the MIT License - see the LICENSE file for details.

Future Improvements
Add email verification

Implement two-factor authentication

Add more social login options (Facebook, GitHub)

Implement rate limiting

Add admin dashboard
