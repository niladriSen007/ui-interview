import { useState, type ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { addHabit } from "../providers/slices/habit-slice"
import type { AppDispatch } from "../providers/store"


const AddHabiForm = () => {

  const dispatch = useDispatch<AppDispatch>()

  const [formValue, setFormValue] = useState<{
    name: string,
    frequency: "daily" | "weekly"
  }>({
    name: "",
    frequency: "daily"
  })

  const handleValuchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleValueSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!formValue?.name){
      alert("Habit name is required")
    }
    dispatch(addHabit({
      name: formValue.name,
      frequency: formValue.frequency
    })
    )
    setFormValue({
      name: "",
      frequency: "daily"
    })
  }


  return (
    <form onSubmit={onSubmit} className="flex flex-col w-96 gap-6">
      <input className="border" type="text" name="name" value={formValue?.name} onChange={handleValuchange} />
      <select className="border" name="frequency" value={formValue?.frequency} onChange={handleValueSelect}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit" className="bg-blue-500">Add Habit</button>
    </form>
  )
}
export default AddHabiForm