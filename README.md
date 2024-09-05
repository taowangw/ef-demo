
## About the demo component

### `npm run storybook`
Please run npm run storybook to see the demo component in action.

Then review the 'Table' component in the storybook.

### TODOs
Support the following features:
Support sticky multiple columns on both left and right.

Please ignore other code files.


## Other Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Business Requirements

1.  Table header can be fixed(stick to top) and rows are sortable by clicking column header (front-end sorting).
2. Support specifying left n columns or right n columns to be fixed when scrolling horizontally.
3. Support pagination and specify the page size (front-end pagination).
4. Add git pre-commit hook to make sure code format & lint passed before commit to code repo.
