import EventsList from "../components/EventsList";
import {useEffect} from "react";
import {useLoaderData,useNavigation,json} from "react-router-dom";
// import {json} from "react-router";

export  default function EventPage(){
    const data = useLoaderData();
    const currState = useNavigation();
    const loading = currState.state === 'loading';
    return <>
        <h1>Event Page</h1>
        {loading && <p>Loading...</p>}
        <EventsList events={data.events} />
        </>
}
export async function loader () {
    const response = await fetch('http://localhost:8080/events');
    if(!response.ok){
        return new Response(JSON.stringify({message: 'failed to get the events'}, {status: 400}))
    }
    return response;
}