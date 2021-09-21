const EventStyles = (
    event: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLElement> | React.FormEvent<HTMLElement>, 
    previousStyle: {}, 
    newStyle?: {}) => {
    const applyEventStyle = newStyle ? 
    Object.assign({}, { ...previousStyle, ...newStyle }) :
    Object.assign({}, { ...previousStyle });
    (<HTMLElement>event.target).setAttribute(
      "style",
      Object.entries(applyEventStyle)
        .map(
          ([key, value]) =>
            `${key.replace(
              /[A-Z]/g,
              (match) => `-${match.toLowerCase()}`
            )}: ${value}`
        )
        .join("; ")
    );
};

export default EventStyles;