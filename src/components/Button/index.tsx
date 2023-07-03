import {HTMLProps, ReactNode} from "react";
import styled from "styled-components";
import {smoothTargetTransition, smoothTransition} from "@/styles/transitions";
import {mobileOnly} from "@/util";

type CustomButtonProps = {
    $variant?: "primary" | "secondary";
    children: ReactNode;
}

type ButtonProps = CustomButtonProps & HTMLProps<HTMLButtonElement>

const Button = ({ $variant="primary", children, ...props }: ButtonProps) => {
    return (
        <StyledButton $variant={$variant} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;

export const StyledButton = styled.button<CustomButtonProps>`
  all: unset;
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem 2rem;
  white-space: nowrap;
  border-radius: var(--border-radius-standard);
  background-color: ${(props: CustomButtonProps) => props.$variant === "primary" ? "var(--color-dark)" : "rgb(var(--color-dark-core) / 0.05);"};
  color: ${(props: CustomButtonProps) => props.$variant === "primary" ? "var(--color-light)" : "var(--color-dark)"};
  
  ${mobileOnly} {
    padding: 1rem 1.5rem;
  }

  ${smoothTargetTransition("background-color, color")};

  &:hover {
    cursor: pointer;
    background-color: ${(props: CustomButtonProps) => props.$variant === "primary" ? "var(--color-primary)" : "var(--color-light)"};
    color: ${(props: CustomButtonProps) => props.$variant === "primary" ? "rgb(var(--base-color-not-black))" : "var(--color-dark)"};
  }
`