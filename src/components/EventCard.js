
import { useEffect } from "react";
import { useState } from 'react';

function EventCard({event}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
    const [setUser] = useState(null);  // Store user data

        useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem('user'));  // Get user from localStorage
            if (storedUser) {
                setIsLoggedIn(true);
                setUser(storedUser);
            }
        }, [setUser]);

    function onEventClick() {
        alert("clicked")
    }

    if(!event) return null;

    const placeholderImage = "/placeholder.png";
    return (
        
        <div className="event-wrapper">
        <div className="event-card">

            <div className="event.image">
                <img className="event-image" src={event.image ?? placeholderImage} alt={event.name} />    
            </div>

            
            <div className="event-overlay">
                <button className="event-btn" onClick={onEventClick}>
                    Favourite
                </button>

            </div>

            <div className="event-info">

                
                <h3 className="event-title">{event.name}</h3>
              
                <a href={event.public_url}>Join the adventure! </a>

          
                <p className="p-desc">Description: {event.description}</p>
                
                <p>Starts: {new Date(event.start_time).toLocaleString()}</p>

                {event.end_time && (
                    <p>
                    Ends: {new Date(event.end_time).toLocaleString()}
                    </p>
                )}  

            </div>

            {/*display the private URL only if you're logged in and it exists*/}
            <div className="event-info">
                {isLoggedIn && event.private_url && <a href={event.private_url}>Private URL</a>}
            </div>

            <div className="event-info">
                {event.speakers.profile_pic  && (

                    <img
                    src='/placeholder.png'
                    alt="pretty blue mountain as a placeholder"
                    />
                ) }
            </div>

            <div>
                {/* Display speakers and their profile pictures */}
                {event.speakers && event.speakers.length > 0 && (
                    <div className="speakers">
                    {event.speakers.map((speaker, index) => (
                        <div key={index} className="speaker">
                        {/* Display profile pic only if it exists */}
                        {speaker.profile_pic ? (
                            <img 
                            src={speaker.profile_pic}
                            alt={speaker.name}
                            className="speaker-image"
                            />
                        ) : (
                            <p></p>
                        )}
                        <p className="accent-text">{speaker.name}</p>
                        </div>
                        
                    ))}
                    
                    </div>
                )}

            </div>

        </div>

        </div>
        
    )

}

export default EventCard