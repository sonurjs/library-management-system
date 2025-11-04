Library Management System
A web application for efficient library management built with Node.js, Express.js, MongoDB, and EJS. This project streamlines book inventory, automates fine calculation, facilitates user management for both students and admins, and includes a comprehensive dashboards for each role.



General

Admin and Student role-based dashboards

Secure sign up, login, and logout

Track activities and manage user accounts

Admin

Add, edit, and delete books

View and manage all students

Issue and collect books

See/activity logs and overdue loans

Calculate/view overdue fines

Send automated email reminders

View and update admin profile

Student

Browse library books

Track issued and previously returned books

See personal overdue/fine summary

View all activities

Update personal profile

🛠️ Technologies
Node.js, Express.js

MongoDB, Mongoose

EJS Templating

Bootstrap & CSS

Nodemailer

📦 Key NPM Packages
express

mongoose

ejs & express-ejs-layouts

express-session

passport, passport-local, bcryptjs

connect-flash

nodemailer

method-override

dotenv

⚡ Getting Started
Prerequisites
Node.js (v14 or above)

MongoDB Cloud/Local instance

npm

Installation
Clone this repo:

bash
git clone <your-repository-url>
cd Library-management-system
Install dependencies:

bash
npm install
Set environment variables (create .env file):

text
MONGO_URI=your-mongo-uri
SESSION_SECRET=your-secret
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
Start the server:

bash
npm start
# or for development
nodemon app.js
Visit http://localhost:5000 in your browser.

📝 Usage
Signup: Students and admins must create an account (admin signup via /auth/admin-signup).

Book Management: Admins can add, update, or delete books.

Issuing/Returning: Admins issue and collect books; students see current and past loans.

Overdue Handling: Fines are automatically calculated for overdue books and shown on dashboards.

Email Reminders: Admins can send reminders for overdue books.

💸 Fine Calculation
Each overdue book accrues a daily fine.

Fines are displayed for each book and as a total in both the admin and student dashboards.

💡 Useful Links
Node.js Docs

Express.js

MongoDB Docs

Bootstrap

🤝 Contributing
Open to pull requests and suggestions. Please fork the repo and submit a PR.

