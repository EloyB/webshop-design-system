import React from "react";
import PropTypes from "prop-types";
import { Primary, Outline, Secondary } from "./styles";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label, ...props }) => {
  switch (type) {
    case "primary":
    default:
      return (
        <Primary {...props}>
          <p>{label}</p>
        </Primary>
      );
    case "outline":
      return <Outline {...props}>{label}</Outline>;
    case "secondary":
      return <Secondary {...props}>{label}</Secondary>;
  }
};

Button.propTypes = {
  /**
   * The type of the button, controlling how it should be rendered.
   */
  type: PropTypes.oneOf(["primary", "outline", "secondary"]),
  /**
   * Controls the size of the button
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The text of the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Whether the button can be interacted with or not.
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional click handler
   */
  primarycolor: PropTypes.string,
  /**
   *
   */
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
  disabled: false,
  onClick: undefined,
};
