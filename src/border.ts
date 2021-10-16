import theme from "./theme.enum";

const border = (type: string, color: string) => {

    const getColor = theme[color] ? theme[color] : color;

    return (
        type === "top" ? 
        { borderTop: `1px solid ${getColor}` } :
        type === "right" ?
        { borderRight: `1px solid ${getColor}` } :
        type === "bottom" ?
        { borderBottom: `1px solid ${getColor}` } :
        type === "left" ?
        { borderLeft: `1px solid ${getColor}` } :
        type === "all" ?
        { border: `1px solid ${getColor}` } :
        { }
    );
}

export default border;