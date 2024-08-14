import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import ErrorPage from "./components/ErrorPage";
import {privateRoutes} from "./router/routs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: privateRoutes
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
