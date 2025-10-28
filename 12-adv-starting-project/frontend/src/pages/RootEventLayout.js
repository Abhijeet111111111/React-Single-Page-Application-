import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";
export default function RootEventLayout(){
    return <>
        <EventsNavigation />
        <Outlet/>
    </>
}