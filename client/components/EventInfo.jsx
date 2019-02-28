import React, {Component} from 'react'

export class EventInfo extends Component {
    render(){
        return(
         <div>   
           <ul>
                {
                this.state.events.map((event)=> {
                    return <div><li>
                                    <h2>{event.event_id[0].name}</h2>
                                </li>
                                <li>{event.event_id[0].date}</li>
                                <li>{event.event_id[0].location}</li>
                                <li>{event.event_id[0].description}</li>
                        </div>
                    })}
             </ul>
        </div>
        )
    }
}

export default EventInfo