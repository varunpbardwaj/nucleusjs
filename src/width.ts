import size from "./size.enum";

const width = (type: string, value: string) => {
    return type === "min" ?
           { minWidth: size[value] } :
           type === "max" ?
           { maxWidth: size[value] } :
           type === "norm" ?
           { width: size[value] } :
           { }
}

export default width;