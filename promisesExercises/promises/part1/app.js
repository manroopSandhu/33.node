let favNumber = 7;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data)
})

let favNumbers = [7,8,10]
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data)
})

Promise.all(
    Array.from({length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`)
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}<p>`))
})