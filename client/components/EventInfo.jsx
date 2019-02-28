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
  <div class="tile is-parent locationtile">
    <div class="tile is-child box">
      <p class="title">Hopeful Map</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
      <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
    </div>
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