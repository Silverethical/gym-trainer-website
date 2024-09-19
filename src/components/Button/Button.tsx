import "./Button.scss";

type ButtonComponent = {
    buttonText?: string;
    startIcon?: string;
    endIcon?: string;
    variant?: "filled" | "outlined";
    size?: "medium" | "large";
    buttonClass?: string;
    buttonId?: string;
    href?: string;
};

const Button = ({
    buttonText = "button",
    startIcon,
    endIcon,
    variant = "filled",
    size = "medium",
    buttonClass = "",
    buttonId,
    href,
}: ButtonComponent) => {
    const buttonClassName = `${
        buttonClass ?? buttonClass
    } button-component button-${variant}`;

    return (
        <a href={href ?? href} className={buttonClass}>
            <button
                id={buttonId && buttonId}
                data-size={size}
                className={buttonClassName}
            >
                {startIcon && <img className="button-icon" src={startIcon} />}
                <span>{buttonText}</span>
                {endIcon && <img className="button-icon" src={endIcon} />}
            </button>
        </a>
    );
};

export default Button;
