const parent = document.querySelector(".parent")
let events = {
  btn1: "Hi",
  btn2: "Hello",
  btn3: "Bye",
}
parent.addEventListener("click", (e) => {
  console.log(events[e.target.id])
})
