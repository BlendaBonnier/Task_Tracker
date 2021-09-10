import { useState } from "react"


const AddTask = ({onAdd}) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()

  if(!text){
    alert('Please add a task')
    return
  }
   onAdd({ text, day, reminder})

   setText('')
   setDay('')
   setReminder(false)
}

    return (
      <form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>
<lable>Task</lable>
<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}>
</input>
</div>
<div className='form-control'>
<lable>Day & Time</lable>
<input type='text' placeholder='Add Date' value={day} onChange={(e) => setDay(e.target.value)}>
</input>
</div>
<div className='form-control form-control-check' >
<lable>Set Reminder</lable>
<input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>

</div>
<input type='submit' value='save task' className='btn btn-block'/>
      </form>
      
    )
}


export default AddTask
