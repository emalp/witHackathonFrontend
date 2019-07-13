import React from 'react';

class Result extends React.Component {

    constructor(props){
        super(props);
        this.data = this.props.data;

    }

    render(){
        return (
            <div class="col">
                <div class="card">
                <div class="card-header">
                    { this.data.name }
                </div>
                    <div class="card-body">
                        <div class="card-img-top" src={this.data.image}></div>
                        <div class="card-text">
                            <p class="text-muted">{this.data.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}

export default Result;