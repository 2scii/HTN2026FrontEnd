const BASE_URL = "https://api.hackthenorth.com/v3/events"

export const getEvents = async () =>{
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();

    const sortedEvents = [...data].sort((a, b) => a.start_time - b.start_time);
    return sortedEvents;

};

export const searchEvents = async () =>{
    const response = await fetch(`${BASE_URL}`
    );
    const data = await response.json();
    return data;
};