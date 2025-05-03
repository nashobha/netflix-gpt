import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PlaySelectedMovies from "./PlaySelectedMovies";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/browse/movie/:id",
            element: <PlaySelectedMovies />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;