import React from 'react';


class Button extends React.Component{
    render(){
        return(
            <Button type={this.props.type}> {this.props.title} </Button>

        )
    }
}

export  default Button