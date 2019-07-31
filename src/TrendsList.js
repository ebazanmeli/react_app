import React from "react";
import './App.css';
import Trend from './Trend';

class TrendsList extends React.Component {

    state = {
        trends: [],
        hasTrends: false
    }

    componentDidMount() {
        if (!this.state.hasTrends) {
            fetch("https://api.mercadolibre.com/trends/MLA")
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        trends: data,
                        hasTrends: true
                    })
                })
                .catch(console.log);
        }
        setInterval(() => {
            this.mezclarArreglo();
            this.setState({ban: ''})
        }, 3000);
    }

    mezclarArreglo() {
        return this.state.trends.sort(function() {return Math.random() - 0.5}).slice(0, 25);
    }

    obtenerClassName() {
        const rnd = Math.floor(Math.random() * 4) + 1
        switch (rnd) {
            case 1:
                return 'red';
            case 2:
                return 'blue';
            case 3:
                return 'yellow';
            case 4:
                return 'green';
            default:
                return 'red';
        }
    }

    mostrarPicture() {
        const rnd = Math.floor(Math.random() * 10)
        if(rnd > 5) {
            return 1;
        } else {
            return 0;
        }
    }

    render() {
        return (
            this.mezclarArreglo().map((trend) => (
                (this.mostrarPicture() === 1)
                    ? <Trend isPicture={true} keyword={trend.keyword} />
                    : <Trend isPicture={false} keyword={trend.keyword} color={this.obtenerClassName()}/>
            ))
        )
    }

}

export default TrendsList;
