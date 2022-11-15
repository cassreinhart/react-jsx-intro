import React from 'react'

const Person = ({age, name, hobbies}) => {

  return (
    <div>
        <p>Learn some information about this person</p>
        <h3>{age >= 18 ? "Please go vote" : "you must be 18."}</h3>
        <ul>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>
  )
}

export default Person