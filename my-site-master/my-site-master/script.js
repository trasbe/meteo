navigator.geolocation.getCurrentPosition(success, error, {
    //Высокая точность
    enableHighAccuracy: true
})

function success ({coords}){
    //Получаем широту и долготу
    const { latitude, longtitude } = coords
    const position = [latitude, longtitude]
    //console.log(position) // [Широта, долгота]
    document.write(position)
}

function error  ({message}) {
console.log(message) // при отказе в доступе получаем PositionError : User denied Geolocation.
}