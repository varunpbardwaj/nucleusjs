import size from "./size.enum";

const height = (type: string, value: string) => {
    return type === "min" ?
           { minHeight: size[value] } :
           type === "max" ?
           { maxHeight: size[value] } :
           type === "norm" ?
           { height: size[value] } :
           { }
}

export default height;