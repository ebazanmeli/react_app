import React from "react";
import './App.css';
import Trend from './Trend';
import TrendPicture from './TrendPicture';

class TrendsList extends React.Component {

    state = {
        trends: [],
        trendsPicture: [],
        trendsToShow: [],
        hasTrends: false,
        hasPictures: false
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
        if(!this.state.hasPictures) {
        this.state.trends.map((trend) => (
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + trend.keyword)
                .then(res => res.json())
                .then((data) => {
                    const pictures = [...this.state.trendsPicture, data.results[0].thumbnail]
                    this.setState({
                        trendsPicture: pictures,
                        hasPictures: true
                    })
                })
                .catch(console.log)
        ))
        }
        return this.state.trends.sort(function() {return Math.random() - 0.5}).slice(0, 20);
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

    renderizarTrend(trend) {
        return (
            <Trend trend={trend} className={this.obtenerClassName()}/>
        )
    }

    renderizarPicture() {
        const size = this.state.trendsPicture.length;
        const rnd = Math.floor(Math.random() * size);
        return (
            <TrendPicture trendPicture={this.state.trendsPicture[rnd]} />
        )
    }

    render() {
        return (
            this.mezclarArreglo().map((trend) => (
                (this.mostrarPicture() === 1) ? this.renderizarPicture() : this.renderizarTrend(trend)
            ))
        )
    }

}

export default TrendsList;
