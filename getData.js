const btn = document.getElementById("btn");
const pri = document.getElementById("data");

let d = [];

btn.addEventListener("click", () => {
  fetch("http://localhost:8080/data")
    .then((result) => result.json())
    .then((x) => {
      console.log(x);
      x.map((p) => (pri.innerHTML += p.notes));
    });
});

console.log(d);
