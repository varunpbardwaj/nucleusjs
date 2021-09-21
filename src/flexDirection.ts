import flexValue from "./flexValue.enum";

const flexDirection = (value: string) => {
    return { flexDirection: flexValue[value] } 
};

export default flexDirection;