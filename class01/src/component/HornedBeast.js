'use strict';

import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <div>
               {this.props.horneInfo}
            </div>
        );
    }
}
export default HornedBeast;