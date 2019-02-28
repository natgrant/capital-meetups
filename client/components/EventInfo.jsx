import React, {Component} from 'react'

export class EventInfo extends Component {
        constructor(){
            super()
            this.state = {
                event: []
            }
        }
    render(){
        return(
         <div>
             <section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Event
      </h1>
    </div>
  </div>
</section> 
            {/* <div>
           <ul> 
               <li>
                    <h2>{this.props.name}</h2>
                </li>
                <li>{this.props.date}</li>
                <li>{this.props.location}</li>
                <li>{this.props.description}</li>
                                })}
             </ul>
             </div> */}
      
        <div>
        <a className="button is-large is-fullwidth">Large</a>
        </div>
              </div>
        )
    }
}

export default EventInfo


