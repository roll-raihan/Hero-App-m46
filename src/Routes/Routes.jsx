import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/Apps/AllApps';
import Installation from '../pages/Installation/Installation';
import AppDetail from '../pages/AppDetail/AppDetail';
import AppNotFound from '../pages/AppNotFound/AppNotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("/appData8.json"),
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch("/allAppData.json"),
                Component: AllApps,
            },
            {
                path: "/installation",
                loader: () => fetch("/allAppData.json"),
                Component: Installation
            },
            {
                path: "/detail/:id",
                loader: () => fetch("/allAppData.json"),
                Component: AppDetail,
            },
            {
                path:"/appNotFound",
                Component:AppNotFound,
            }
        ]
    },
]);