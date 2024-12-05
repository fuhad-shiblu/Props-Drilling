
const CompoTwo = ({AddData, RemoveData, MainData}) => {
  return (
    <>
     <div className="fuhadShiblu_compo">
      <button onClick={RemoveData}>Decrease</button>
      <p>{MainData}</p>
      <button onClick={AddData}>Increase</button>
     </div>
    </>
  )
}

export default CompoTwo