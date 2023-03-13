import React from 'react'

const OptionItem = ({player}) => {

  return (
    <option value={player._id}>{player.name}</option>
  )
}

export default OptionItem