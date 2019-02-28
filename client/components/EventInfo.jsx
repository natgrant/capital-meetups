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
        <div>
         <div>
             <section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Event
      </h1>
      <div>
      <a class="button is-danger joinbutton">Join</a>
        </div>
    </div>
  </div>
</section> 
   <figure className="image is-50x50 eventimage">
  <img src="/images/coffee.jpg"/>
    </figure>
     </div>
              <div className="tile is-parent basicdetails">
    <article className="tile is-child box">
      <div className="content">
        <p className="title">Event Details</p>
        <div className="content">
        <p>host: bob</p><br></br><p>Time/Date: now</p>
        </div>
      </div>
    </article>
  </div>
  </div>
  <div class="tile is-parent description">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Description</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
        </div>
      </div>
    </article>
  </div>
  
    </div>
        ) 
    }
}

export default EventInfo


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