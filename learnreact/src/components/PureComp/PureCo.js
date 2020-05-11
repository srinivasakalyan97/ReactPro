import React, { PureComponent } from 'react'

export class PureCo extends PureComponent {
    render() {
        console.log("pure",this.props.message);
        return (
            <React.Fragment>
                <p>{this.props.message}</p>
            </React.Fragment>
        )
    }
}

export default PureCo
