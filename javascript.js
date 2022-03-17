
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://api.icndb.com/jokes/random')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.value.joke);
    // const joke = document.createElement("div");
    // joke.setAttribute('id', 'myJoke');
    // joke.innerHTML = `${data.value.joke}`
    // body.appendChild(joke);
    const jokes = document.getElementById('jokes');
    jokes.innerText = `${data.value.joke}`

  })
})

document.getElementById('button').addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.value.joke);
    // const joke = document.createElement("div");
    // joke.setAttribute('id', 'myJoke');
    // joke.innerHTML = `${data.value.joke}`
    // body.appendChild(joke);
    const jokes = document.getElementById('jokes');
    jokes.innerText = `${data.value.joke}`

  })
})




// fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
// 	"method": "GET",
// 	"headers": {
// 		"accept": "application/json",
// 		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// async function fetchData() {
//   const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//   const record=await res.json();
//   document.getElementById("date").innerHTML=record.data[0].date;
//   document.getElementById("areaName").innerHTML=record.data[0].areaName;
//   document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//   document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();