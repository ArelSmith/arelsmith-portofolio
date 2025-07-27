import { Link } from "react-router-dom";
import { type FC } from "react";

type ButtonType = {
  href: string;
  text: string;
  external?: boolean;
  variant?: "normal" | "outlined";
};

const Button: FC<ButtonType> = ({
  href,
  text,
  external,
  variant = "normal",
}) => {
  const baseStyle =
    "transition duration-150 px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4 ";

  const filledStyle = "text-white bg-tertiary hover:bg-[#5f2f1c]";
  const outlinedStyle =
    "text-tertiary border border-tertiary hover:bg-[#5f2f1c] hover:text-white";

  const finalStyle =
    baseStyle + (variant === "normal" ? filledStyle : outlinedStyle);

  if (external) {
    <a href={href} target="_blank" className={finalStyle}>
      {text}
    </a>;
  }
  return (
    <div>
      <Link to={href} className={finalStyle}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
