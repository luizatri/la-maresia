
const form = document.querySelector(".home__clima form");
const input = document.querySelector("#valor-ciudad");
const msg = document.querySelector(".msg");
const list = document.querySelector(".api-clima .cities");
const apiKey = "605ace650bc96f760c72aecc4b8aa96f";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});




// let btnClima = document.querySelector("#btn-clima");
// let ciudad = document.querySelector("#valor-ciudad");
// let nombre = document.querySelector(".nombre");
// let desc = document.querySelector(".desc");
// let temp = document.querySelector(".temp");

// btnClima.addEventListener('click', function(){

//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=605ace650bc96f760c72aecc4b8aa96f&units=metric')
//     .then(response => response.json())

//     .then(data => {
//         let nameValue = data ['name'];
//         let tempValue = data ['main']['temp'];
//         let descValue = data ['weather'][0]['description'];
   
//         nombre.innetHTML = nameValue;
//         temp.innerHTML = tempValue;
//         desc.innerHTML = descValue;
//     })

// .catch(err => alert("La ciudad ingresada no es valida."))

// })
