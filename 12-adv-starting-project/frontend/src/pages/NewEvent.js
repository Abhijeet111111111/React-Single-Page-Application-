import EventForm from "../components/EventForm";
import {redirect} from "react-router";
export default function NewEvent(){
    return <EventForm method="POST" event={{}}/>
}


