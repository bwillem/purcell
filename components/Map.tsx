import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBccxC9_g6Xzy1oWQnNadPBOYi1Z9VuuLM'
        >
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{
                    lat: 49.493,
                    lng: -117.295,
                }}
                zoom={15}
            />
        </LoadScript>
    )
}

export default Map
