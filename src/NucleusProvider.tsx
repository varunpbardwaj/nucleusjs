import { cloneElement } from 'react';
import InjectStyles from './injectStyles';

const NucleusProvider = (Consumers: any, injectStyles: {}) => {
    return (
        Consumers.children.length > 0 ?
        Consumers.children.map((Consumer: JSX.Element, index: number) => {
            return cloneElement(
                Consumer,
                {
                    key: index,
                    ...InjectStyles(injectStyles)
                }
            )
        }) :
        cloneElement(
            Consumers.children,
            {
                key: 0,
                ...InjectStyles(injectStyles)
            }
        )
    )
}

export default NucleusProvider;