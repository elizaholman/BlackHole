import React from 'react'

const OptionItem = ({player, index}) => {



  return (
    <option value={index}>{player.name}</option>
  )
}

export default OptionItem