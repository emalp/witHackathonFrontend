import React from 'react';

class Result extends React.Component {

    constructor(props){
        super(props);
        this.data = this.props.data;

    }

    render(){
        return (
            <div>
                {this.data.name}  {this.data.reviews}
                <br/>
                {this.data.price} {this.data.address}
                {/* will be image here */}
                <br/>

            </div>
        )

    }


}

export default Result;