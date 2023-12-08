import { css } from '@emotion/react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  backgroundColor: string
  color: string
  border: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, color, border }) => {
  const buttonStyle = css`
    border-radius: 50%;
    padding: 10px;
    width: 50px;
    height: 50px;
    font-size: 24px;
    background-color: ${backgroundColor};
    color: ${color};
    border: ${border};
  `;

  return (
    <button css={buttonStyle} onClick={onClick}>{children}</button>
  )
}

export default Button