import React, { useState } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'

export const TodoItem = () => {
    const [isFulfilled, setIsFulfilled] = useState<boolean>(false);
  return (
    <div>
        <Checkbox checked={isFulfilled}/>
    </div>
  )
}
