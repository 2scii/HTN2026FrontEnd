import { useState } from "react"

export function Home(){

    const [searchEvents, setEvents] = useState("");
    const[loading, setLoading] = useState(true)



    const handleSearch = (e) => {
        e.preventDefault();
        if(!searchEvents.trim()) return
        if(loading) return
        setLoading(true)
        alert(searchEvents)

    }

    return(

        <main>

        <body>

        <div class="home-content">
            <h1 className="home-title">Hackathon Global Inc.</h1>

            <h2 className="home-h2">Join the adventure</h2>
        </div>

        
            <div className="img-container">
                    <img className="bg-img" src='/BackgroundHome.png' alt="bg-image-mountains-sunrise"></img>
      
            </div>

        <div class="home-content">
        
                        {/*search button and search form*/}

                        
                        <form onSubmit={handleSearch} className="search-form">
                            <input 
                            type="text" 
                            placeholder="Find an adventure!"
                            className="search-input"
                            value={searchEvents}
                            onChange={(e) => setEvents(e.target.value)}
                            />

                            <button type="submit" className="search-button">
                                Search
                            </button>
                        </form>
                        

                             

        </div>

        </body>

        </main>
    )

}