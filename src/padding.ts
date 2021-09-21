import size from "./size.enum";

const padding = (type: string, value: string) => {
    return (
        type === "x" ?
        { paddingRight: size[value], paddingLeft: size[value] } :
        type === "y" ?
        { paddingTop: size[value], paddingBottom: size[value] } :
        type === "top" ?
        { paddingTop: size[value] } :
        type === "right" ?
        { paddingRight: size[value] } :
        type === "bottom" ?
        { paddingBottom: size[value] } :
        type === "left" ?
        { paddingLeft: size[value] } :
        type === "all" ?
        { padding: size[value] } :
        { }
    )
};

export default padding;