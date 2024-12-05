
const CompoTwo = ({AddData, RemoveData, MainData}) => {
  return (
    <>
     <button onClick={AddData}>Plus</button>
     <p>{MainData}</p>
     <button onClick={RemoveData}>Minus</button>
    </>
  )
}

export default CompoTwo