import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/error/ErrorPage'
import Battles from '../pages/BattlesScreen/Battles';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/battles",
        element: <Battles />,
    },
]);