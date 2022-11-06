//user의 위치정보를 주는 함수를 사용해보겠습니다
// 사용자 api: 5d37cca077a5d404874395f0247224d8


const API_KEY = "5d37cca077a5d404874395f0247224d8";
function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  console.log("You live in ",lat,lon);
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
  .then(response =>response.json()
  .then(data =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child")
    city.innerText= data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }));
}

function onGeoError(){
  alert("Can't find you, No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//step2. 숫자를 장소로 바꿔주는 서비스를 이욯한다!