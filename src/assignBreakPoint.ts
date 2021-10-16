export default function AssignBreakpoint(props: {
    points: any,
    assign: any
}) {

    const size = props.points ? 
        props.points : 
        {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1400,
            xxl: 1800
        }

    const getBreakPoint = () => {
        const width = window.innerWidth;
        switch (true) {
            case (width < size.sm):
                props.assign(1);
                break;
            case (width < size.md):
                props.assign(2);
                break;
            case (width < size.lg):
                props.assign(3);
                break;
            case (width < size.xl):
                props.assign(4);
                break;
            case (width < size.xxl):
                props.assign(5);
                break;
            case (width >= size.xxl):
                props.assign(6);
                break;
        }
    }

    window.addEventListener("resize", getBreakPoint);  

    getBreakPoint();
}