import flexValue from "./flexValue.enum";

const flexAlign = (type: string, value: string) => {
    return (
        type === "content" ?
        { alignContent: flexValue[value] } :
        type === "items" ?
        { alignItems: flexValue[value] } :
        type === "self" ?
        { alignSelf: flexValue[value] } :
        { }
    )
};

export default flexAlign;