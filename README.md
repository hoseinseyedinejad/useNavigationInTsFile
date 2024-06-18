# Using (useNavigation) hook in non-react components #
In earlier versions of React and react-router-dom, developers had access to a history object in the router. This history object provided a history.push() method, which was used to navigate users to different routes. This method was particularly useful when developers needed to initiate navigation from non-React components, such as TypeScript files. However, this approach is no longer supported in the latest versions of React and react-router-dom.

The newer versions of these libraries introduced a concept called hooks, one of which is the useNavigate hook. As per the design, hooks are intended to be used within React components.

In this project, we’ve devised a workaround to use hooks in non-React components. We’ve created a middleware that mimics a React component for the hook and exposes its functionalities. This allows us to leverage the power of hooks even in non-React components. Please note that this is a workaround and may not align with standard best practices. It’s always recommended to structure your application in a way that all navigation happens within React components. However, this solution can be beneficial in certain scenarios where that’s not possible. Use this approach judiciously.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
