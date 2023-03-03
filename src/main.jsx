import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store/MenuStore'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
)
