import { 
APIProvider,
Map,
AdvancedMarker,
Pin
} from "@vis.gl/react-google-maps"


export default function MapElement() {
    const position = { lat: 38.987122, lng: -94.668488}



    return (
        <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
            <div style={{width: '100%', height: '544px'}}>
                <Map mapId={process.env.REACT_APP_MAP_ID} zoom={20} center={position}>
                    <AdvancedMarker position={position}>
                        <Pin background={"#42A418"} borderColor={"#42A418"} glyphColor={"#D9F0D0"} />
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}