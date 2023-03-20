// // Skeleton object property to copy:
// project_0: {
//   title: "",
//   description: ``,
//   technologies: ``,
// },

export const MoreInfoProjects = {
  project_1: {
    title: "Password Manager",
    description: `About my Full-Stack Password Manager app:
  I created this project with one of the main goal being that to challenge my web security skills. In the process I learned that while you can't control which links the frontend user clicks or which apps they may install (that could be malicious), we as developers should focus to minimize those risks by maximizing security steps required to access sensitive data. All that must be achieved by finding a sweet spot between trying to not annoy our users and securing their data.
  
  Special features I implemented:
  On the frontend
  With React I avoided any unnecessary re-renders & used strategic re-renders to my advantage for features like multi-device for example: user A logged on 'device A' modifies its "password vault", then the same user A but logged on 'device B' - when they try any CRUD operations on their (unrefreshed) "password vault" page - they will get the latest changes (made on device A) without any refresh on their device B. While also my goal was to use as minimum libraries as possible and to keep following the DRY principle by building reusable components myself & creating custom hooks.
  On the backend
  I implemented "refresh tokens" which are long-lived besides "access tokens" which are short-lived. However I gave the clients an option to stay signed-in until they manually log out in cases where they fully trust their device & network. The user requires a valid refresh token in order to request a new access token - on success they get both new accessToken & refreshToken - while on invalid or expired refresh token the said token is removed from the database and the user is alerted accordingly and redirected to the login page on the frontend.
  Anti-hacks security: in case where the user's refreshToken is not inside the database -> it means the refreshToken was used by someone else (I suspect it's a hacker) and I alert the user about the potential threat.
  The challenge
  "Multi-device" feature allows the user A logged on device A to "log out all devices"(meaning: empties out the array of refreshToken's in the database) which will technically log-out the same user A but logged on device B & my "safety alert-message" about anti-hacks will get triggered, therefore, the message itself has to have empathy about such a case scenario where some of their family members clicked the "logout all devices" button on another device as an example. It was kind of like a Catch-22 where I couldn't have a separate message and the solution was a guided-empathetic-message to make sure I'm not misleading my users.
  `,
    technologies: `PostgreSQL database, ExpressJS + NodeJS, ReactJS + Redux`,
  },
};
