# Beers list

Task: Create a small project which displays a list of beers and pokemons using PUNK API and Pokemon
API

## Starting the app

There are  two ways to setup application: by Docker and manually by using package managers(npm, yarn, etc);

## Docker way

All you need is just type command in the following order

```
docker build -t app:dev .

docker run -it --rm -e CHOKIDAR_USEPOLLING=true app:dev
```

## Manually

Follow the default react app receipt to run the application


### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
