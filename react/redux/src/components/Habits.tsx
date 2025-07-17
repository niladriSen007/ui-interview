import { useSelector } from "react-redux"
import type { RootState } from "../providers/store"
import type { HabitState } from "../providers/slices/habit-slice"

const Habits = () => {

  const habits: HabitState[] = useSelector<RootState>((state) => state?.habits?.habits)

  return (
    <div className="py-12">
      <h1> Habits </h1>
      <ul>
        {habits?.map((habit) => (
          <div className="flex gap-12" key={habit.id}>
            <li >{habit.name}</li>
            <li >{habit.frequency}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default Habits