import flexValue from "./displayValue.enum";

const flexJustify = (type: string, value: string) => {
    return (
        type === "content" ?
        { justifyContent: flexValue[value] } :
        type === "items" ?
        { justifyItems: flexValue[value] } :
        type === "self" ?
        { justifySelf: flexValue[value] } :
        { }
    )
};

export default flexJustify;