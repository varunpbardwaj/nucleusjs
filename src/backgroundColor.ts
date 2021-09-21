import theme from "./theme.enum";

const backgroundColor = (color: string) => {
    return {
        backgroundColor: theme[color]
    }
};

export default backgroundColor;