import React, { useState, useContext } from 'react'

import GlobalContext from '../state/GlobalContext'

const Form = () => {

    const [newName, setNewName] = useState('')

    const {dispatch} = useContext(GlobalContext)

    const increase = () => dispatch({type: 'INCREASE'})
    const decrease = () => dispatch({type: 'DECREASE'})

    const changeName = (event) => {
        setNewName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type: 'CHANGE_NAME', payload: newName})
        setNewName('')
    }

    return (
    <div className='card' >
        <form onSubmit={handleSubmit} >
            <h2>Change Name</h2>
            <input type='text' onChange={changeName} value={newName} placeholder='Name Input' />
            <button>Change</button>
        </form>
        <div>
            <button onClick={increase} >+</button>
            <button onClick={decrease} >-</button>
        </div>
    </div>
    )
}

export default Form
