import flexValue from "./flexValue.enum";

const flexWrap = (value: string) => {
    return { flexWrap: flexValue[value] }
};

export default flexWrap;