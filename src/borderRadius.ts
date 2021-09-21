import size from "./size.enum";

const borderRadius = (side: string, value: string) => {
  return (
    side === "topLeft" ?
    { borderRadius: `${size[value]} ${size["s_0"]} ${size["s_0"]} ${size["s_0"]}`} :
    side === "topRight" ?
    { borderRadius: `${size["s_0"]} ${size[value]} ${size["s_0"]} ${size["s_0"]}`} :
    side === "bottomRight" ?
    { borderRadius: `${size["s_0"]} ${size["s_0"]} ${size[value]} ${size["s_0"]}`} :
    side === "bottomLeft" ?
    { borderRadius: `${size["s_0"]} ${size["s_0"]} ${size["s_0"]} ${size[value]}`} :
    { borderRadius: `${size[value]} ${size[value]} ${size[value]} ${size[value]}`}
  )
    
}

export default borderRadius;