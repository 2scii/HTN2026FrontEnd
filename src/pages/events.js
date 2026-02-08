import {useState, useEffect} from "react";
import EventCard from "../components/EventCard.js";
import { getEvents } from "./api";



export function Events(){
    


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [events, setEvents] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true)
  

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
    
    }
  }, []); 

    useEffect( () => {
        const loadEvents = async () => {
            console.log("EVENTS STATE:");
            try{
            const allEvents= await getEvents()
              
            if( isLoggedIn ){
                
                setEvents(allEvents);
            }
            else{
                const publicEvents = allEvents.filter(event => event.permission === 'public');
                setEvents(publicEvents)
            }
            
            
            } catch (err) {
                console.log(err)
                setError("Failed to load")
            }
            finally {
                setLoading(false)
            }
        }

        loadEvents()
    }, [isLoggedIn])



        
    /*dependency array is checked after every rerender*/


    return(
    
    <div className="event-page-wrapper">
    
        <div className="event-count">
            <h2>Number of Events: {events.length}</h2>
        </div>

        {error &&<div className="error-message">{error}</div> }
                        
        {loading ? ( <div className="loading">Loading...</div> 
        ) : (
            
            <div className="events-grid">
                {events.map((event) => 
                    <EventCard event={event} />
                )}
            </div>
        )}
    {/** */}
        
    </div>
    );


}