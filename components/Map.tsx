import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBccxC9_g6Xzy1oWQnNadPBOYi1Z9VuuLM'
        >
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{
                    lat: -3.745,
                    lng: -38.523,
                }}
                zoom={10}
            />
        </LoadScript>
    )
}

export default Map
