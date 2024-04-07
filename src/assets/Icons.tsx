type Props = {
 width?: string;
 height?: string;
 color?: string;
}
export const LocIcon = (props: Props) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "16"} height={props.height ? props.height : "16"} fill={props.color ? props.color : "currentColor"} className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
    </svg>)
}
