const CombineStyles = (...styles: []) => {
    return Object.assign({}, ...styles);
};

export default CombineStyles;