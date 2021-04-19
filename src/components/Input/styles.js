import "../../index.css";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const iconPositions = {
  none: "",
  left: "flex-row space-x-3",
  right: "flex-row-reverse",
};

export const InputWrapper = tw.div`
    p-3
    border-2
    border-gray-200
    rounded-xl
    w-full
    bg-gray-50
    flex
    items-center
    ${(props) => iconPositions[props.iconPosition]}
`;

export const BaseInput = tw.input`
    flex-1    
    bg-gray-50
    focus:outline-none
`;
