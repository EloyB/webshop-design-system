import React from "react";
import PropTypes from "prop-types";
import { BaseInput, InputWrapper } from "./styles";

export const Input = ({ label, icon, iconPosition, ...props }) => {
  return (
    <div>
      {label && <p className="font-semibold">{label}</p>}
      <InputWrapper iconPosition={iconPosition}>
        {iconPosition !== "none" && icon}
        <BaseInput {...props} />
      </InputWrapper>
    </div>
  );
};

Input.propTypes = {
  /**
   * The text in the input.
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * The text of the label.
   */
  label: PropTypes.string,
  /**
   * Whether the button can be interacted with or not.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the button can be interacted with or not.
   */
  icon: PropTypes.element,
  /**
   * Whether the button can be interacted with or not.
   */
  iconPosition: PropTypes.oneOf(["none", "left", "right"]),
  /**
   * Function for onChange
   */
  onChange: PropTypes.func,
  /**
   * value of input
   */
  value: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  iconPosition: "none",
};
