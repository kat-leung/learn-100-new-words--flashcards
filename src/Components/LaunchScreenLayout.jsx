import LaunchScreenNav from "./LaunchScreenNav";
import { Outlet } from "react-router-dom"

export default function LaunchScreenLayout(){
    return (
        <>
            <LaunchScreenNav />
            <Outlet />
        </>
    )
}