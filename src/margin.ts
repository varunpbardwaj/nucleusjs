import size from "./size.enum";

const margin = (type: string, value: string) => {
    return (
        type === "x" ?
        { marginRight: size[value], marginLeft: size[value] } :
        type === "y" ?
        { marginTop: size[value], marginBottom: size[value] } :
        type === "top" ?
        { marginTop: size[value] } :
        type === "right" ?
        { marginRight: size[value] } :
        type === "bottom" ?
        { marginBottom: size[value] } :
        type === "left" ?
        { marginLeft: size[value] } :
        type === "all" ?
        { margin: size[value] } :
        { }
    )
};

export default margin;