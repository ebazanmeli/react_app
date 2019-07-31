import React from 'react'
import Picture from "./Picture";
import Titulo from "./Titulo";

class Trend extends React.Component {

    render() {
        if(this.props.isPicture) {
            return (
                <div className="square">
                    <Picture keyword={this.props.keyword} />
                </div>
            )
        } else {
            return (
                <div className={`square ${this.props.color}`}>
                    <Titulo keyword={this.props.keyword} />
                </div>
            )
        }
    }

}

export default Trend;
