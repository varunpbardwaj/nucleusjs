import boxShadowValue from "./boxShadowValue.enum";

const boxShadow = (type: string, value: string) => {
    return { boxShadow: `${boxShadowValue[type]} ${boxShadowValue[value]}` };
}

export default boxShadow;