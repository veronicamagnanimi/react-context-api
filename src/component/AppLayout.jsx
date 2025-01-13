import {Outlet} from "react-router-dom";
import AppHeader from "./AppHeader";

const AppLayout = () => {

    return (
        <>
        <AppHeader />
        <Outlet />
        {/* <footer>Footer</footer> */}
        </>
    )
}

export default AppLayout;