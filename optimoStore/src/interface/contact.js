import React, {Component} from 'react';
class Contact extends Component {
    state= { }

    render(){

        console.log(this.props);

    let {username} = this.props.match.params;
        return(
            <React.Fragment>
                {console.log({username})}
                Contact {username}
            </React.Fragment>
        );
    }
}

export default Contact;