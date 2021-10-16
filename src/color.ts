import theme from "./theme.enum";

const color = (color: string) => {
    return { 
        color: theme[color] ? theme[color] : color
    }
};

export default color;