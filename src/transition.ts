import duration from "./duration.enum";

const transition = (value: string) => {
    return { transition: duration[value] }
};

export default transition;