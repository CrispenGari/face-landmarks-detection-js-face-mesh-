# What is this?

This is a simple Machine learning React app that draws face mesh points on faces from a web camera in real time using a pre-trained model from tensorflow called `@tensorflow-models/facemesh`. This application is cappable of detecting 468 face points and draw the face mesh on each face on the web camera.

## This app is using

- React WebCam
- Tensorflow.js

## Installation of required dependencies

## Installation of React WebCam using `npm`

`$ npm i react-webcam`

## Installation of React WebCam using `yarn`

`yarn add react-webcam`

## Installation of tensorflow and the pretrained model for face points detections model using `npm`

`$ npm i @tensorflow/tfjs-core @tensorflow/tfjs @tensorflow-models/facemesh @tensorflow/tfjs-converter @tensorflow/tfjs-backend-webgl or @tensorflow/tfjs-backend-wasm`

## Installation of tensorflow and the pretrained model for face points detections model using using yarn

```
$ yarn add @tensorflow-models/facemesh
$ yarn add @tensorflow/tfjs-core, @tensorflow/tfjs-converter
$ yarn add @tensorflow/tfjs-backend-wasm # or @tensorflow/tfjs-backend-webgl

```

## Scripts tags

In order for this application to work we must include the following scripts in the index.html file as well if you don't want to do the installation process

```
<!-- Require the peer dependencies of facemesh. -->
<script src="https://unpkg.com/@tensorflow/tfjs-core@2.1.0/dist/tf-core.js"></script>
<script src="https://unpkg.com/@tensorflow/tfjs-converter@2.1.0/dist/tf-converter.js"></script>

<!-- You must explicitly require a TF.js backend if you're not using the tfs union bundle. -->
<script src="https://unpkg.com/@tensorflow/tfjs-backend-wasm@2.1.0/dist/tf-backend-wasm.js"></script>
<!-- Alternatively you can use the WebGL backend: <script src="https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.1.0/dist/tf-backend-webgl.js"></script> -->
```

## The URL to the repository of blazeface models.

[click here](https://github.com/tensorflow/tfjs-models/tree/master/facemesh)

# How to test this application.

### Clone this repository using the following command:

`git clone [URL to this repository]`

### Navigate to the project folder of this app by running the following command:

`cd face-landmarks-detection-js-face-mesh-`

### Install the dependencies by running the following command:

`npm install`

### Then:

`npm start or npm run start`

### The react development server will start listening on port 3000 click the following URL:

URL: [test application](http://localhost:3000)

## Why this simple application?

This application was created for development and practice purposes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
