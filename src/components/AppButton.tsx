import { Button, CircularProgress } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomButtonProps {
  variant?: "text" | "outlined" | "contained"; // Custom variant options
  label: string;
  color?: "inherit" | "default" | "primary" | "secondary" | "success" | "error"; // Color options from MUI Button
  onClick?: () => void;
  style?: object; // Custom style options
  disabled?: boolean;
  disableElevation?: boolean;
  size: "small" | "medium" | "large";
  startIcon?: React.ReactElement<SvgIconProps>;
  endIcon?: React.ReactElement<SvgIconProps>;
  loading?: boolean;
  buttonVariant?: "button" | "submit" | "reset";
}
export const AppButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  variant,
  style,
  disabled,
  disableElevation,
  color,
  size,
  startIcon,
  endIcon,
  loading,
  buttonVariant,
  ...restProps // Capture any additional props
}) => {
  const buttonColor = color === "success" || color === "error" ? color : undefined;
  
  return (
    <>
      <Button
        variant={variant || "contained"} // Use the provided variant or default to "contained"
        sx={style} // Apply custom style to the button
        color={buttonColor || "primary"} // Use the determined color or default to "primary"
        onClick={onClick} // Use the provided onClick handler
        disabled={disabled} // Disable the button if specified
        disableElevation={disableElevation} // Disable elevation effect if specified
        size={size} // Set the button size
        startIcon={startIcon} // Render the start icon if provided
        endIcon={endIcon} // Render the end icon if provided
        type={buttonVariant || "button"}
        {...restProps} // Pass down any additional props
      >

        {/* Render the label or a loading indicator */}
        {loading ? <CircularProgress size={20} /> : label}

      </Button>
    </>
  );
};
