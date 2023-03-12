import React from 'react'
import PropTypes from 'prop-types'

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("")
  return (
    <div data-test='input-component'>
      <from className="form-inline">
        <input 
         data-test ="input-box"
         className='"mb-2 mx-sm-3'
         type="text"
         placeholder='enter guess'
         value={currentGuess}
         onChange={(event)=>{
          setCurrentGuess(event.target.value)
         }}
        />
        <button
          className='btn btn-primary mb-2'
          data-test="submit-button"
        >Submit</button>

      </from>
    </div>
  )
}
Input.propTypes = {
    secretWord: PropTypes.string.isRequired
 }

export default Input