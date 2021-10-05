import axios from "axios";

console.log('Bora começar');

axios.defaults.baseURL = "http://192.168.1.101:3000"

window.addEventListener('load', function () {
  console.log('Carreguei :)')
  axios.post("login", {
    event: "load",
    timestamp: new Date()
  })
  const $nameSystem = this.document.querySelector('#name-system') as HTMLSpanElement
  $nameSystem.textContent = this.navigator.userAgent;
})

window.addEventListener('unload', function (event) {
  const data = {
    event: "unload",
    timestamp: new Date()
  }
  this.navigator.sendBeacon(`${axios.defaults.baseURL}/quit`, JSON.stringify(data))
})

document.addEventListener('visibilitychange', function(event) {
  console.log('Mudança de visibilidade')
  axios.post('visibility-change', {
    event: document.hidden ? "hide" : "show",
    timestamp: new Date()
  })
})