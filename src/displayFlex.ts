import flexValue from "./flexValue.enum";

const displayFlex = (value: string) => {
    return { display: flexValue[value] } 
};

export default displayFlex;