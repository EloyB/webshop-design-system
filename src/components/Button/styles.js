import "../../index.css";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const base =
  "align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-bold focus:outline-none";

const sizes = {
  large: "px-12 py-3 rounded-xl",
  medium: "px-4 py-3 rounded-xl",
  small: "px-3 py-3 rounded-xl",
};

const CustomPrimary = styled.button`
  background-color: ${(props) => props.primaryColor && props.primaryColor};
`;

export const Primary = tw(CustomPrimary)`
    text-white 
    border 
    border-transparent
    ${() => base}
    ${(props) => sizes[props.size]}
    ${(props) =>
      props.disabled ? "opacity-50 cursor-not-allowed bg-gray-300" : ""}
      ${(props) => !props.primaryColor && "bg-primary-red"}
`;

const CustomOutline = styled.button`
  border-color: ${(props) => props.primaryColor && props.primaryColor};
`;

export const Outline = tw(CustomOutline)`
    ${() => base}
    text-black
    border-2 
    dark:text-gray-400 
    focus:outline-none
    active:bg-transparent 
    active:text-gray-500 
    focus:shadow-outline-gray
    ${(props) => sizes[props.size]}
    ${(props) =>
      props.disabled ? "opacity-50 cursor-not-allowed bg-gray-300" : ""}
    ${(props) => !props.primaryColor && "border-primary-red"}
`;

export const Secondary = tw.button`
    ${() => base}
    bg-gray-100
    text-black 
    dark:text-gray-400 
    focus:outline-none 
    border 
    border-transparent
    active:bg-transparent 
    hover:bg-gray-200 
    focus:shadow-outline-gray 
    dark:hover:bg-gray-500 
    dark:hover:text-gray-300 
    dark:hover:bg-opacity-10
    ${(props) => sizes[props.size]}
    ${(props) =>
      props.disabled ? "opacity-50 cursor-not-allowed bg-gray-300" : ""}
`;
