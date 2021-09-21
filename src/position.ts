import positionValue from "./positionValue.enum";

const position = (value: string) => {
    return { position: positionValue[value] }
};

export default position;