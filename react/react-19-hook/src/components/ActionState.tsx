import { useActionState } from "react"

const ActionState = () => {

  const increment = async (prev: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return prev + 1
  }

  const [state, formAction, isPending] = useActionState(increment, 0)

  return (
    <div>
      <form action={formAction}>
        <p>count : {state}</p>
        <button disabled={isPending}> {isPending ? 'Incrementing...' : 'Increment'}</button>
      </form>
    </div>
  )
}

export default ActionState