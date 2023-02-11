import React from "react"

function CardForm ({formData, changeHandler}) {
return (
    <div>
          <label>Front</label>
            <br/>
            <textarea name="front" placeholder="Front side of card" onChange={changeHandler} value={formData.front}></textarea> 
            <br/>
            <label>Back</label>
            <br/>
            <textarea name="back" placeholder="Back side of card" onChange={changeHandler} value={formData.back}></textarea>
            <br/>
    </div>
)
}

export default CardForm