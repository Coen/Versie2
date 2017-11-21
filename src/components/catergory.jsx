import React from 'react';

class Catergory extends React.Component {

    

    render() {

        // hier mogen we lekker coderen
        console.log(this.props);

        return (
            <div className="catergory">
                <div className="catergory__name">
                    {this.props.name}
                </div>
            </div>
        );
    }

}
export default Catergory;