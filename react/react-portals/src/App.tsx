/* import { useState } from "react"
import Modal from "./components/Modal" */

import { lazy } from "react"
import { Demo } from "./components/Demo"

/* const Demo = lazy(() => import "./") */

const App = () => {
  /*   const [open, setOpen] = useState(false) */

  function onClose() {
    setOpen(false)
  }

  return (
    <>
     /* This code snippet is a React component named `App`. It consists of two main sections wrapped in
      a fragment `<>...</>`: */
      {/*  <div className="relative z-10">
        <button onClick={() => setOpen(!open)} className="bg-blue-500 p-4">open modal</button>
        {open && <Modal open={open} onClose={onClose}>modal</Modal>}
      </div >
      <div className="relative z-20 bg-violet-500 p-12">other content</div> */}
      <Demo />
    </>
  )
}
export default App