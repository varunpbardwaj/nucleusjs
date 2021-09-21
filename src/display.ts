import displayValue from "./displayValue.enum";

const display = (value: string) => {
    return { display: displayValue[value] } 
};

export default display;