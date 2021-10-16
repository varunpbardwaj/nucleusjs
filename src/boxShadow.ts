import boxShadowValue from "./boxShadowValue.enum";

const boxShadow = (type: string, value: string) => {
    return boxShadowValue[value] ? 
        { boxShadow: `${boxShadowValue[type]} ${boxShadowValue[value]}` } :
        { boxShadow: "none" }
}

export default boxShadow;