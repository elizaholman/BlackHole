import React from 'react'

const OptionItem = ({player, index}) => {

  return (
    <option defaultValue={player._id}>{player.name}</option>
  )
}

export default OptionItem