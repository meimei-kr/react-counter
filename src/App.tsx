import { useReducer } from 'react'
import { css } from '@emotion/react'
import Button from './components/Button'

type State = {
  count: number
}

type Action = { type: "increment" } | { type: "decrement" }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const initialState: State = { count: 0 }

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

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div css={containerStyle}>
      <h1 css={h1Style}>React Counter</h1>
      <p css={pStyle}>{state.count}</p>
      <div css={buttonGroupStyle}>
        <Button onClick={() => dispatch({ type: "increment" })} backgroundColor="#1f5ace" color="#fff" border="none">+</Button>
        <Button onClick={() => dispatch({ type: "decrement" })} backgroundColor="#fff" color="#1f5ace" border="#1f5ace solid 1px">-</Button>
      </div>
    </div>
  );
}

export default App