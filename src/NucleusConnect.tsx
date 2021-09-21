import React from 'react';
import InjectStyles from './injectStyles';

function NucleusConnect(Consumer: any, injectStyles: {}) {
    return class extends React.Component {
        constructor(props: any) {
            super(props);
        }
        render() {
            return <Consumer {...this.props} { ...InjectStyles(injectStyles) } />
        }
    } 
}

export default NucleusConnect;