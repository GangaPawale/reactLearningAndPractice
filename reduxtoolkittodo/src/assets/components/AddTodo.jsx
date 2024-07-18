import {useState} from 'react' 
import {useDispatch}  from 'react-redux'
import {addTodo} from '../../features/todo/todoSlice'

function AddTodo(){
        const [input,setInput]=useState('')
        const dispatch=useDispatch()

        const submitHandler=(e)=>{
            e.preventDefault()
            dispatch(addTodo(input))
            setInput('')
        }

        





        return(
            <form onSubmit={submitHandler} >
                <input
                type='text'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />

                <button
                type='submit'
                
                >➕</button>


                

            </form>
        )
} 

export default AddTodo