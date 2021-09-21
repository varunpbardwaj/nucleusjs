import flexValue from "./displayValue.enum";

const flexDirection = (value: string) => {
    return { flexDirection: flexValue[value] } 
};

export default flexDirection;