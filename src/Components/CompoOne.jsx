import { useState } from "react"
import CompoTwo from "./CompoTwo"

const CompoOne = () => {
     const [data , setData] = useState(1)

     const handleAdd = ()=>{
          setData(data + 1)
     }
     const handleRemove = ()=>{
          setData(data - 1)
     }
  return (
    <>
     <CompoTwo AddData={handleAdd} RemoveData={handleRemove} MainData={data}/>
    </>
  )
}

export default CompoOne
