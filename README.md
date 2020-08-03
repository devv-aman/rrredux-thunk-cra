### A React + Router + Redux (with thunk) + CSS (CRA) Boilerplate

[![npm version](https://badge.fury.io/js/rrredux-thunk-cra@2x.png)](https://badge.fury.io/js/rrredux-thunk-cra)

1. Clone the project `git clone https://github.com/entrepaman/rrredux-thunk-cra.git`
2. Run `yarn` to download all dependencies
3. Run `yarn start` to start the project on http://localhost:3000

<br />

#### Struture

```
📦public
 ┣ 📜index.html
 ┗ 📜robots.txt
📦src
 ┣ 📂store
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜auth.js - Used for demo, Change as per ur use case
 ┃ ┃ ┗ 📜index.js - contains combineReducer
 ┃ ┗ 📜index.js - creates store using createStore from redux & thunk is applied as middleware
 ┣ 📂views
 ┃ ┗ 📂Home
 ┃ ┃ ┗ 📜index.js - Demo Home component connected with Redux and userId is printed in console for demo.
 ┣ 📜App.css
 ┣ 📜App.js - App with React Router Setup and Root Component to Home
 ┣ 📜index.css
 ┣ 📜index.js - Import App and Wrap the App around Provider from react-redux
┣ 📜.gitignore
┣ 📜package.json
┣ 📜README.md
```

<br />

#### Versions - [package.json](https://github.com/entrepaman/rrredux-thunk-cra/blob/master/package.json)

-   react: 16.13.1,
-   react-redux: 7.2.1,
-   react-router-dom: 5.2.0,
-   redux: 4.0.5,
-   redux-thunk: 2.3.0
-   thunk: 0.0.1

<br /><br />

> Test files are removed from the project. Create test directory as per your need.
