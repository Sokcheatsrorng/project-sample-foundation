


import { useDispatch} from 'react-redux'
import { decrement, increment } from '../../redux/features/counter/counterSlice'

export default function CounterComponent() {
 
  const dispatch = useDispatch();
  console.log(dispatch)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          className='p-2 border bg-amber-200'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       
        <button
          aria-label="Decrement value"
         className='p-2 border bg-amber-200'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
       
      </div>
    </div>
  )
}