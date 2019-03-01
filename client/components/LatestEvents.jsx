import React from "react";

class LatestEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="columns ">
        <div className="column">
          <article class="message is-dark">
            <div className="message-header">
              <p>Event 1</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
        {/* <div className="column">
          <article className="message is-dark">
            <div className="message-header">
              <p>Event 2</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
        <div className="column">
          <article className="message is-dark">
            <div className="message-header">
              <p>Event 3</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
              porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
              efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor
              ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
              sem eget, facilisis sodales sem.
            </div>
          </article>
        </div> */}
      </div>
    );
  }
}

export default LatestEvents;
