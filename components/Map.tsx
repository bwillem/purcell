import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Map() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}
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
