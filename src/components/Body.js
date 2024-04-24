import Login from "./Login";
import  Browse from "./Browse";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Search from "./Search";
import SecondaryContainer from "./SecondaryContainer";
import ShowContainer from "./Showcontainer";
import MainContainer from "./MainContainer";
import MovieInfo from "./MovieInfo";

const Body = () =>{
    
    const AppRouter = createBrowserRouter([
        {
           path:"/",
           element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>,
        children: [
            {
                path:"/browse/",
                element:<>
                <MainContainer/>
                <div className=" -mt-16 sm:-mt-64 md:-mt-64 pl-3 bg-black">
                <SecondaryContainer/>
                <ShowContainer/>  
                </div>
                </>

            },
            {
                path: "/browse/search",
                element: <Search />
            },
            {
                path: "/browse/movies",
                element:<SecondaryContainer/>
            },
            {
                path:"/browse/tvshow",
                element:<ShowContainer/>
            },
            {
                path:"/browse/info",
                element:<MovieInfo/>
            }
        ]
 },
]);



return(
    <RouterProvider router={AppRouter}/>
)
}

export default Body;