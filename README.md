```
╔═╗╔╦╗╔═╗╔╦╗╔═╗  ╔═╗┬─┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐  ╔═╗ ┬ ┬┌─┐┬  ┬┌┬┐┬ ┬  ╔╦╗┬┌─┐┌─┐┬  ┌─┐┬ ┬
║  ║║║║╣ ║║║╚═╗  ╠═╝├┬┘│ │ │││ ││   │   ║═╬╗│ │├─┤│  │ │ └┬┘   ║║│└─┐├─┘│  ├─┤└┬┘
╚═╝╩ ╩╚═╝╩ ╩╚═╝  ╩  ┴└─└─┘─┴┘└─┘└─┘ ┴   ╚═╝╚└─┘┴ ┴┴─┘┴ ┴  ┴   ═╩╝┴└─┘┴  ┴─┘┴ ┴ ┴ 
```

## File Structure
```
my-app
└── src
    └── components
        └── component-name
            ├── component-name-container.js
            ├── component-name-redux.js
            ├── component-name-styles.js
            ├── component-name-view.js
            └── index.js
````
Let see in details:

- **component-name-container.js** is your business logic and state management as handled before being sent to the stateless view Component.
- **component-name-redux.js** is the mapStateToProps, mapDispatchToProps, and connect functionality of Redux. If you use an alternative global - state management tool, give it a similar file name, such as component-name-mobx.js. This allows you to harness multiple global states (if - necessary, though not recommended) and allows you to easily swap global state managers in the future.
- **component-name-styles.js** is your JSS. I’ve used this file extensively for storing Material UI withStyles HOCs and JSS.
- **component-name-view.js** is your stateless view Component. For the majority of cases, this Component should be able to be pure functional - Component (no hooks!).
- **index.js** is your entry point for importing your Component. It contains nothing but an export statement that points to the topmost Component at any point in time, because the topmost Component changes often during development.

Your component-name directory can have its own utils as well. This allows you to code split. 

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.