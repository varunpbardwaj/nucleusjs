import theme from "./theme.enum";

const border = (type: string, color: string) => {

    return (
        type === "top" ? 
        { borderTop: `1px solid ${theme[color]}` } :
        type === "right" ?
        { borderRight: `1px solid ${theme[color]}` } :
        type === "bottom" ?
        { borderBottom: `1px solid ${theme[color]}` } :
        type === "left" ?
        { borderLeft: `1px solid ${theme[color]}` } :
        type === "all" ?
        { border: `1px solid ${theme[color]}` } :
        { }
    );
}

export default border;