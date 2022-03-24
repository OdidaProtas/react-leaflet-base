import React, { Component } from 'react';
import MapContainer from './components/MapContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0.0236,
            lng: 37.9062,
            zoom: 7
        };
    }
    componentDidMount() {}
    render() {
        return ( <
            MapContainer latitude = { this.state.lat }
            longitude = { this.state.lng }
            zoom = { this.state.zoom }
            />
        );
    }
}

export default App;