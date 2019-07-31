import React from 'react'

class Picture extends React.Component {

    state = {
        trendPicture: ''
    }

    componentDidMount() {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + this.props.keyword)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    trendPicture: data.results[0].thumbnail
                })
            })
            .catch(console.log)
    }

    render() {
        return (
            <img src={this.state.trendPicture} alt="trendPictrure"/>
        )
    }

}

export default Picture;
