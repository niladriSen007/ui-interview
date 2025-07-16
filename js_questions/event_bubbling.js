const parent = document.querySelector(".parent")
const button1 = document.querySelector("#btn1")

parent.addEventListener("click", () => {
  console.log("Parent Clicked")
})

button1.addEventListener("click", (event) => {
  console.log("Child Clicked")
  event.stopPropagation()
})
