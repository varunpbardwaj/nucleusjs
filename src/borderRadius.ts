import size from "./size.enum";

const borderRadius = (side: string, value: string) => {
  return (
    side === "topLeft" ?
    { borderRadius: `${size[value]} ${size["p_0"]} ${size["p_0"]} ${size["p_0"]}`} :
    side === "topRight" ?
    { borderRadius: `${size["p_0"]} ${size[value]} ${size["p_0"]} ${size["p_0"]}`} :
    side === "bottomRight" ?
    { borderRadius: `${size["p_0"]} ${size["p_0"]} ${size[value]} ${size["p_0"]}`} :
    side === "bottomLeft" ?
    { borderRadius: `${size["p_0"]} ${size["p_0"]} ${size["p_0"]} ${size[value]}`} :
    { borderRadius: `${size[value]} ${size[value]} ${size[value]} ${size[value]}`}
  )
    
}

export default borderRadius;