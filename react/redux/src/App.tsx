import { Provider } from "react-redux"
import { store } from "./providers/store"
import AddHabiForm from "./components/AddHabiForm"
import Habits from "./components/Habits"

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <AddHabiForm />
        <Habits />
      </div>
    </Provider>
  )
}
export default App