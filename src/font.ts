import size from "./size.enum";

const font = (type: string, value: string) => {
    return (
        type === "weight" ?
        { fontWeight: value } :
        { fontSize: size[value] }
    )
};

export default font;