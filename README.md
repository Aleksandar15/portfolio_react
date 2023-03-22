#### My resume https://aleksandar15-portfolio.netlify.app/Aleksandar15.pdf

#### My live portfolio https://aleksandar15-portfolio.netlify.app

##### Technologies used for my portfolio:

###### ReactJS with Redux Toolkit; Vite for faster workflow experience; CSS3.

## About my Portfolio Project

- I decided to go with Redux (Toolkit) state managing library, at first I thought it wouldn't be necessary, but it's almost always a good choice when you need to pass 'props' in multiple components without worrying about potential 'props drilling'.
  - Reusability:
    - Created "All my projects" array of objects with each object element representing one of my projects & I'm mapping over this array stored in '_MyProjectsArray.jsx_', which is imported inside '_MyProjects.jsx_' component where I have built a 'skeleton-box' for a very easy way of dynamically rendering my projects while following the DRY (don't-repeat-yourself) principle.
    - I have also built another object inside '_MoreInfoProjects.jsx_' consisting of more in-depth informations about each of my project, with each property relating to the _Unique Identifier_ property named '_`projectIdentifier`_' - stored previously in '_MyProjectsArray.jsx_' - and here I store that in-depth description about each of my project -> which then I am importing them inside my custom modal 'MyModalProjects.jsx' and then each button/element with an `onClick` prop event set to open this Modal must have a `data-target` prop with a value equal to the _`projectIdentifier`_ (_Unique Identifier_) which state is then passed into '_MyModalProjects.jsx_' using RTK so I can provide those extra descriptions dynamically into my custom Modal's 'skeleton placeholders
