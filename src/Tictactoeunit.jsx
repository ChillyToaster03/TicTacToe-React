import { useState } from "react"

function Tictactoeunit({value , onClick}) {
    return (
      <button className="unit" onClick= {onClick} >{value}</button>
      
    )
}

export default Tictactoeunit