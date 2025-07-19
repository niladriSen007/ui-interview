import { useDispatch, useSelector } from "react-redux"
import { deleteHabit, type HabitState } from "../providers/slices/habit-slice"
import { type AppDispatch, type RootState } from "../providers/store"

const Habits = () => {

  const habits: HabitState[] = useSelector<RootState>((state) => state?.habits?.habits)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="py-12">
      <h1> Habits </h1>
      <ul>
        {habits?.map((habit: HabitState) => (
          <div className="flex gap-12" key={habit.id}>
            <li >{habit.name}</li>
            <li >{habit.frequency}</li>
            <button onClick={() => {
              dispatch(deleteHabit({ id: habit?.id }))
            }}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Habits