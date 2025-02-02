# Best seller Frontend


## Introduction

> **Best seller Frontend** is an e-commerce application built using React that enables users shop for goods in the plaform. 

The App has been built using React.

The core libraries are as follows:

* React
* Redux
* Redux Saga
* React Material UI

The app uses and advanced redux structure. All Network calls go via redux and redux saga. The global state is then updated. All components simply listen to the state or send a request for data. The UI is state driven. The full redux store can be found in the "store" folder under the "src directory".

The UI is based primarily on Material UI. Tailwind CSS is used for grids and responsiveness. Other thatn that, custom styling is used. The theming is quite an advanced structure in itself. The Layout and Theme is selected based on the route. This can be seen in th "layouts" directory in the "src" directory. All Icons are SVG or Font Icons so scaling should not be an issue.


## Scripts to Note

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Docker

* Build image

`docker build -t react_challenge .`

* Run container
`docker run --rm -p 8000:80 react_challenge`
