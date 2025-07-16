import { useEffect } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, onClose }: {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void
}) => {


  return createPortal(
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-violet-500 p-13 z-50"
        onClick={(e) => e.stopPropagation()}>
        <button className="bg-red-600 mr-10" onClick={onClose}>close</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")!
  )
}
export default Modal