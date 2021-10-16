import duration from "./duration.enum";

const transition = (value: string, property: string) => {
    return { 
        transition: `${property ? property : "all"} ${duration[value]}`
    }
};

export default transition;