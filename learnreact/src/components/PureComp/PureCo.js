import React, { PureComponent } from 'react'

export class PureCo extends PureComponent {
    render() {
        console.log("pure",this.props.message);
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default PureCo
