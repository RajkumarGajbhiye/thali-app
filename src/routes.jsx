import App from "./App";
import Checkout from "./pages/Checkout";
import Thali from "./pages/Thali";

const routes=[
            {
            path: "/",
            element: <App/>,
            },
            {
               path: "checkout",
               element: <Checkout/>,  
            },
            {
               path: "thali",
               element: <Thali/>,  
            },
           ]

export default routes;