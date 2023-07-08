import React from "react";
import "./Navbar.css"
class Navbar extends React.Component {
    render() {
        return (
            <div className="item">

                <div className="container">
                    <div className="item1">
                        <div>
                            <h2>LOGO</h2>
                        </div>
                        <nav>
                            <a href="f">Asosiy</a>
                            <a href="f">Mevalar</a>
                            <a href="f">Ho'l mevalar</a>
                            <a href="f">quruq mevalar</a>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar