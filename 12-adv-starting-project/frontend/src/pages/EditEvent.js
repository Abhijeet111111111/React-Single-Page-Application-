import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";
export default function EditEvent(){
    const {event} = useRouteLoaderData('event-details')
    return <EventForm method="PATCH" event={event}/>
}