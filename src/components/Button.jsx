import ButtonSvg from "../assets/svg/ButtonSvg"; 

const Button = ({className, herf, onClick, children, px, white}) => {
    const classes = `cursor-pointer button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}  ${className || ""}`;

    const spanClasses = "relative z-10";

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <a herf={herf} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    return herf
    ? renderLink() 
    : renderButton();
}

export default Button
