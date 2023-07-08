import React from "react";
import "./Card.css"

class App extends React.Component {
  render() {
    const { api } = this.props
    return (
      <div className="container">
        <div className="ok">
          {
            api.map((value) => {
              return (
                <div className="card">
                  <img src={value.url} alt="" />
                  <h3>{value.title}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
