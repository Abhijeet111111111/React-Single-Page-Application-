import {Link, useRouteLoaderData,redirect} from "react-router-dom";
import {useSubmit} from 'react-router-dom'

export default function EventDetails() {
    const {event} = useRouteLoaderData('event-details');
    const submit = useSubmit();

     function handleDelete(){
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
             submit(null,{method : 'DELETE'})
        }
    }
    return <>
        <img src={event.image}/>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <Link to="edit">Edit</Link>
        <button onClick={handleDelete}>Delete</button>
    </>
}

export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        return new Response(JSON.stringify({message: 'failed to get the details'}, {status: 400}))
    }

    return response;
}

export async function action ({request,params}){
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/'+id,{
        method : request.method
    })
    if (!response.ok) {
        return new Response(JSON.stringify({message: 'failed to get the delete'}, {status: 400}))
    }
    return redirect('/events')
}