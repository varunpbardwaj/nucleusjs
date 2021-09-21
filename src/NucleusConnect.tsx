import React from 'react';
import InjectStyles from './injectStyles';

function NucleusConnect(Consumer: any) {
    return class extends React.Component {
        constructor(props: any) {
            super(props);
        }
        render() {
            return <Consumer {...this.props} { ...InjectStyles() } />
        }
    } 
}

export default NucleusConnect;