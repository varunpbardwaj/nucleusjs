import theme from "./theme.enum";

const backgroundColor = (color: string) => {
    return {
        backgroundColor: theme[color] ? theme[color] : color
    }
};

export default backgroundColor;