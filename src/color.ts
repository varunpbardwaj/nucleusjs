import theme from "./theme.enum";

const color = (color: string) => {
    return { color: theme[color] }
};

export default color;