import "./Button.css";

export const Button = ({ size, color, children }) => {
    const classNames = {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        green: "btn-green",
        orange: "btn-orange",
        black: "btn-black",
        gray: "btn-gray",
        white: "btn-white",
    };

    return (
        <button className={`btn ${classNames[size]} ${classNames[color]}`}>
            {children}
        </button>
    );
};

// size // "sm", "md", "lg"
// color // "green", "orange", "black", "gray", "white"
