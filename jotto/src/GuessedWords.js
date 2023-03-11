import React from 'react'
import PropTypes from 'prop-types'

function GuessedWords(props) {
    let contents
    if(props.guessedWords.length ===0){
        contents =(
            <span data-test="guess-instructions">
                Try to guess the secret word !
            </span>
        )
    }
  return (
    <div data-test="component-guessed-words">
        {contents}
    </div>
  )
}

GuessedWords.propTypes = {
   guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessedWords: PropTypes.string.isRequired,
        letterMatchWount: PropTypes.number.isRequired
    })
   ).isRequired
}

export default GuessedWords