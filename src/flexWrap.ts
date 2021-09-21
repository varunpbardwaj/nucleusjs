import flexValue from "./displayValue.enum";

const flexWrap = (value: string) => {
    return { flexWrap: flexValue[value] }
};

export default flexWrap;