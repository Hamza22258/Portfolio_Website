# Portfolio Website

## TO RUN THE PROJECT

### SETUP AN ACCOUNT FOR EMAILJS

- Set up an account on EmailJS (https://www.emailjs.com/) and create a service and template to use for sending emails.
- Replace the placeholder values 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', and 'EMAILJS_PUBLIC_KEY' with your actual EmailJS service ID, template ID, and public key ID.

### SCRIPTS

```
npm i
npm start
```

### DIRECTORY STRUCTURE

```
├── build (.gitignore)
├── node_modules (.gitignore)
├── public
│   ├── assets
|   ├── doc
|   ├── images
├── src
│   ├── components
│   │   ├── component
│   │   │   ├── Component.jsx
│   │   │   ├── Component.scss
│   ├── App.jsx
│   ├── app.scss
│   ├── data.js
│   ├── global.js
│   ├── index.js
├── .env (.gitignore)
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
