// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import EventDetails, {loader as eventDetailLoader} from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./RootLayout";
import {loader as eventsLoader} from './pages/EventPage'
import RootEventLayout from "./pages/RootEventLayout";
import Error from './pages/Error'
import {action as eventDeleteAction} from "./pages/EventDetails";
import {action as manipulateFormAction} from "./components/EventForm";

const routes = createBrowserRouter(
    [{
        path: '/',
        element: <RootLayout/>,
        errorElement : <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path : 'events',
                id:'rootEvents',
                element:<RootEventLayout/>,
                children: [
                    {
                        path: ':id',
                        id:'event-details',
                        loader : eventDetailLoader,
                        children:[
                            {
                                index : true,
                                element: <EventDetails/>,
                                action:eventDeleteAction,
                            },
                            {
                                path: 'edit',
                                element: <EditEvent/>,
                                action : manipulateFormAction
                            },

                        ],

                    },
                    {
                        index : true,
                        loader:eventsLoader,
                        element: <EventPage/>,
                    },
                    {
                        path: 'new',
                        element: <NewEvent/>,
                        action : manipulateFormAction
                    },

                ]

            },
        ]
    }])

function App() {
    return <RouterProvider router={routes}/>
}

export default App;
