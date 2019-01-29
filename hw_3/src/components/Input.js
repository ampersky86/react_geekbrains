import React from 'react';


class Input extends React.Component{
    render(){
        return(
            <Input type={this.props.type} placeholder = {this.props.placeholder}> </Input>
        )
    }
}

export default Input
