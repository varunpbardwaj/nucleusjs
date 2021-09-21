import nucleus from "./nucleus";

const InjectStyles = (Styles: {}) => {
    return Object.assign({}, { ...nucleus, ...Styles });
};

export default InjectStyles;