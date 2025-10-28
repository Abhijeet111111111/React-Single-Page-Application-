import { useRouteError} from 'react-router-dom'
import mainNavigation from "../components/MainNavigation";
import MainNavigation from "../components/MainNavigation";



export default function Error(){
    const error = useRouteError();
    let title = "An Error Occurred...";
    let message = "Something is wrong!";

    message = error.message;

    return <>
        <MainNavigation />
        <h1>{title}</h1>
        <p>{message}</p>
    </>
}