import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface HabitState {
  id: string
  name: string
  frequency: "weekly" | "daily"
  completedDate: string[]
  createdAt: string
}

interface Habits {
  habits: HabitState[]
}

const initialState: Habits = {
  habits: []
}

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit(state, action: PayloadAction<{ name: string, frequency: "daily" | "weekly" }>) {

      const { payload } = action
      const newHabit: HabitState = {
        id: new Date().toISOString(),
        name: payload.name,
        frequency: payload.frequency,
        completedDate: [],
        createdAt: new Date().toISOString()
      }

      state.habits.push(newHabit)
    },
    deleteHabit() { }
  }
})

export const { addHabit, deleteHabit } = habitSlice.actions

export default habitSlice.reducer