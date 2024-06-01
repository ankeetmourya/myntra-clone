import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/routes/App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bags from "./routes/Bags.jsx"
import Home from './routes/Home.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path: "/", element: <Home /> /*, loader: postLoader*/
      },
      {
        path: "/bags",
        element: <Bags />,
        // action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
