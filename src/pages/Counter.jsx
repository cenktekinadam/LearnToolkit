import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreace, increace, setCount } from '../../redux/slices/counterSlice'


const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((store) => store.counterReducer)
    return (
        <div className='vh-100 w-full d-flex justify-content-center align-items-center '>
            <div className='d-flex gap-4 align-items-center '>
                <button className='btn btn-secondary  ' onClick={() => dispatch(decreace())}>Azalt</button>
                <span className='fs-5'>{count}</span>
                <button className='btn btn-secondary  ' onClick={() => dispatch(increace())}>Arttır</button>
                <button className='btn btn-secondary  ' onClick={() => dispatch(setCount(0))}>Sıfırla</button>

            </div>

        </div>
    )
}

export default Counter