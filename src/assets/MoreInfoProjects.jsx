// // NOTE: I have decided to go with whiteSpace: "pre-wrap"
// // instead of whiteSpace: "pre-line", so make sure to
// // have the correct start-spacing of each new line.

// // NOTE2: property name AKA the number in "project_#"
// // comes from 'MyProjectsArray.jsx'.

// // Skeleton object property to copy:
// project_0: {
//   title: "",
//   technologies: ``,
//   description: ``,
// },

export const MoreInfoProjects = {
  project_portfolio: {
    title: "Aleksandar15 Portfolio",
    technologies: `ReactJS + Redux Toolkit; CSS3; Vite for faster workflow experience.`,
    description: `I decided to go with Redux (Toolkit) state managing library, at first I thought it wouldn't be necessary, but it's almost always a good choice when you need to pass 'props' in multiple components without worrying about potential 'props drilling'.
    
    Reusability:
Created "All my projects" array of objects with each object representing one of my projects & I'm mapping over this array stored in 'MyProjectsArray.jsx', which is imported inside 'MyProjects.jsx' component where I have built a 'skeleton-box' for a very easy way of dynamically rendering my projects while following the DRY (don't-repeat-yourself) principle.

I have also built another object inside 'MoreInfoProjects.jsx' consisting of more in-depth informations about each of my project, with each property relating to the Unique Identifier property named 'projectIdentifier' - stored previously in 'MyProjectsArray.jsx' - and here I store that in-depth description about each of my project -> which then I am importing them inside my custom Modal 'MyModalProjects.jsx' and then each button/element with an 'onClick' prop event set to open this modal must have a 'data-target' prop with a value equal to the 'projectIdentifier' (Unique Identifier) which state is then passed into 'MyModalProjects.jsx' using RTK so I can provide those extra descriptions dynamically into my custom Modal's 'skeleton placeholders'.`,
  },
  project_1: {
    title: "Password Manager",
    technologies: `PostgreSQL database, ExpressJS + NodeJS, ReactJS + Redux, react-bootstrap, Axios; JWT.`,
    description: `I created this project with one of the main goal being that to challenge my web security skills. In the process I learned that while you can't control which links the frontend user clicks or which apps they may install (that could be malicious), we as developers should focus to minimize those risks by maximizing security steps required to access sensitive data. All that must be achieved by finding a sweet spot between trying to not annoy our users and securing their data.
  
    Special features I implemented:

  On the frontend:
With React I avoided any unnecessary re-renders & used strategic re-renders to my advantage for features like multi-device for example: user A logged on 'device A' modifies its "password vault", then the same user A but logged on 'device B' - when they try any CRUD operations on their (unrefreshed) "password vault" page - they will get the latest changes (made on device A) without any refresh on their device B. While also my goal was to use as minimum libraries as possible and to keep following the DRY principle by building reusable components myself & creating custom hooks.
  On the backend:
I implemented "refresh tokens" which are long-lived besides "access tokens" which are short-lived. However I gave the clients an option to stay signed-in until they manually log out in cases where they fully trust their device & network. The user requires a valid refresh token in order to request a new access token - on success they get both new accessToken & refreshToken - while on invalid or expired refresh token the said token is removed from the database and the user is alerted accordingly and redirected to the login page on the frontend.
  Anti-hacks security:
In case where the user's refreshToken is not inside the database -> it means the refreshToken was used by someone else (I suspect it's a hacker) and I alert the user about the potential threat.
  The challenge:
"Multi-device" feature allows the user A logged on device A to "log out all devices"(meaning: empties out the array of refreshToken's in the database) which will technically log-out the same user A but logged on device B & my "safety alert-message" about anti-hacks will get triggered, therefore, the message itself has to have empathy about such a case scenario where some of their family members clicked the "logout all devices" button on another device as an example. It was kind of like a Catch-22 where I couldn't have a separate message and the solution was a guided-empathetic-message to make sure I'm not misleading my users.
`,
  },
  project_2: {
    title: "KING-Store Clothes",
    technologies: `ReactJS with Redux, Firebase library to work with Cloud Firestore database;
    NodeJS + ExpressJS, Stripe API for payment; styled-components library; redux-saga.`,
    description: `On the frontend:
I am using React with Redux library on the frontend & also using firebase library for the ease of communicating to my Firebase database. For keeping all of the users' "collection shopping cart" I used redux-persist library in order to save the redux store in their local storage. For the styling I went with the styled-components library as their CSS-in-JS technique is a good choice to avoid CSS leaking globally.
    
  On the backend:
Server is built in Node.js with Express library. I am using Firebase with their NoSQL Cloud Firestore database & also using their Google authentication provider. I am using Stripe API for the payment/billing features that my app offers.

  Further comment on using "redux-saga":
In my honest opinion using "redux-saga" is almost never a good choice, there's a lot of uneasy code to write & "getting used to" on your eyes - if I was to refactor my whole project I would go with RTKQ (Redux ToolKit Query) or even vanilla Redux would be a better choice over \`redux-saga\`.
`,
  },
  project_3: {
    title: "Task-Manager APP",
    technologies: `NodeJS + ExpressJS + MongoDB database, JWT; EJS; SendGrid API for mails.`,
    description: `A task-manager APP with user Authentication is a backend focused project. Users can create an account and start writing notes of things a user has to do. They can mark them up as completed.
Using EJS (Embedded JavaScript) with Node.js which is a templating language that allowed me to generate HTML markup with plain JavaScript. I created templates that contain placeholders for rendering dynamic content -> Hence why this app, deployed on Render.com, runs server-side and EJS renders the frontend.
For the MongoDB the database is hosted on MongoDB Atlas and I'm using the "MONGODB_URL" from my environment to connect to it -> which is a great alternative to hosting a "containerized instance" of MongoDB on Render.com.
SendGrid API is used for sending 'welcome email' to users that create new accounts.
 Extra features:
The "/me" route of "Account" section allows the user to change their password or delete their account.

`,
  },
  project_4: {
    title: "Chat APP",
    technologies: `NodeJS+ExpressJS; Socket.io library for the WebSockets protocol; bad-words library; mustache.js, moment.js, QS libraries.`,
    description: `A server-side focused project using WebSockets protocol which allows users to chat online over my chat-app website.
Client-side (frontend) is built with "vanilla DOM" with the:
Mustache library for rendering HTML templates;  
Moment.js library for working with dates and times; 
QS library to parse the query string of the query portion in the current URL link into an object with key/value-pairs that corresponds to the parameters, and then I'm grabbing the 'username' and 'room' properties from the returned object (which consists of the URL query)
 - The second argument which is an object with a property \`ignoreQueryPrefix: true\` indicates that the leading "?" (question mark) should be ignored when parsing the query string into an object.

Socket.IO is a library used for real-time web applications. It provides me with an API for WebSockets. Socket.IO enables bi-directional communication between the client-side and server-side, which I used in my chat-app to allow a real-time chat exchanges.
 `,
  },
  project_5: {
    title: "Weather App",
    technologies: `Node.js + Express.js; Handlebars.js library; TailwindCSS; Weatherstack.com for the forecast API; Mapbox.com for the geolocation API.
`,
    description: `A server-side (backend) focused Weather APP project with Handlebar.js & TailwindCSS libraries on the frontend, used to show the weather forecast shows the weather forecast of a given city which a user provides in the search field with the help of weatherstack.com forecast API & mapbox.com geolocation API.
  I used Handlebars.js templating engine library for simplifying the process of generating HTML templates which are then populated with dynamic data.
    Tailwind CSS library which includes a collection of pre-written CSS classes I used for styling & I also provided a Dark Mode UI feature.`,
  },
  project_6: {
    title: "Smart Brain APP",
    technologies: `Node.js + Express.js, PostgreSQL database, React.js`,
    description: `I created smart-brain app using ReactJS on the frontend, with NodeJS + ExpressJS library on the backend & PostgreSQL database. While Clarifai API is used to detect faces of an image - which then the 'counts' number of total "detected faces" are stored in each user's data.

  Clarifai API allows for both image and video recognition, in my code I used it for detecting faces of an image URL link (*) provided in the search field.
    *URL link has to be correct otherwise its due to fail if Clarifai API can't recognize the image format.`,
  },
  project_7: {
    title: "Robo-App",
    technologies: `ReactJS + Redux; tachyons framework`,
    description: `A frontend-focused project using ReactJS and Redux, tachyons framework for styling.
    
  Tachyons framework provides me with pre-designed CSS classes, it is similar to Bootstrap except it's more minimalistic which also means Tachyons comes in a smaller size but with that, of course, comes with less UI design options.
  I used Redux-logger middleware for the ease of debugging & following how Redux store is behaving (in terms of 'actions' & 'state changes') as it provides me with detailed logs inside the browser's console.
    `,
  },
  project_8: {
    title: "Landing Page",
    technologies: `JavaScript, HTML5, Bootstrap 4 frameowrk or library`,
    description: `I created this project using HTML5 and CSS3 with Bootstrap 4 framework. I used MailChimp email platform to provide a way to collect prospective customer's e-mail address.

    MailChimp is a platform used by businesses for managing their email campaigns.`,
  },
  project_9: {
    title: "Password Generator",
    technologies: `JavaScript + CSS3 + HTML5`,
    description: `Password Generator project built with JavaScript which then I included in my Password Manager app.
Frontend is built with 'vanilla' DOM, CSS and HTML.

 - In the index.html file I used 'defer' attribute on the 'script' element which is similar to the 'async' attribute when downloading JS content in the background, but the advantage is that the 'script' would be executed once the HTML document has been parsed and that way it doesn't stop/pause the HTML from being loaded first.

  - Worth noting is that the 'defer' attribute works very similarly if I was to add the 'script' tag to the very bottom inside the 'body' element -> the only advantage is that I can have the 'script' tag on the top inside head element and find out much faster which scripts I am importing without having to scroll to the bottom to see it.`,
  },
};
