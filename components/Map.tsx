import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBccxC9_g6Xzy1oWQnNadPBOYi1Z9VuuLM'
        >
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{
                    lat: 49.49729395819832,
                    lng: -117.35979337365863,
                }}
                zoom={15}
            />
        </LoadScript>
    )
}

export default Map
