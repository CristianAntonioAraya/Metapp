

export const getUserPosition = () => {
    if( !("geolocation" in navigator) ) {
        console.log('Geolocation no supported')
        return;
    }
    const onSuccess = ( location ) => {
        const lon = location.coords.longitude;
        const lat = location.coords.latitude;
        return ( lon, lat )
    }
    const onError = ( error ) => {
        console.log('error',error)
        return 'error'
    }
    navigator.geolocation.getCurrentPosition( onSuccess, onError )


}