import React from 'react';
import Catergory from './components/catergory';

class App extends React.Component {




    render() {
        return (
            <div className="menu">
                <div className="app">
                    IKEA POSTCARD
                    <Catergory name="MEUBELS"/>
                    <Catergory name="LICHTEN"/>
                    <Catergory name="NATUUR"/>
                    <Catergory name="TECHNOLOGIE"/>
                </div>
            </div>
        );
    }

}
export default App;