import { useState } from 'react'
import { css } from '@emotion/react'
import Button from './components/Button'

const App = () => {
  const containerStyle = css`
    width: 200px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const buttonGroupStyle = css`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  `;

  const h1Style = css`
    font-size: 16px;
    color: #c6c6c7;
  `

  const pStyle = css`
    font-size: 48px;
    font-weight: bold;
    color: #1f5ace;
  `

  const [count, setCount] = useState(0)

  const handleCountUp = () => (setCount((prev) => prev + 1))
  const handleCountDown = () => (setCount((prev) => prev - 1))

  return (
    <div css={containerStyle}>
      <h1 css={h1Style}>React Counter</h1>
      <p css={pStyle}>{count}</p>
      <div css={buttonGroupStyle}>
        <Button onClick={handleCountUp} backgroundColor="#1f5ace" color="#fff" border="none">+</Button>
        <Button onClick={handleCountDown} backgroundColor="#fff" color="#1f5ace" border="#1f5ace solid 1px">-</Button>
      </div>
    </div>
  );
}

export default App