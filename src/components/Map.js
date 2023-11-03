import { useState } from "react"
import { 
APIProvider,
Map,
AdvancedMarker,
Pin,
InfoWindow
} from "@vis.gl/react-google-maps"


export default function MapElement() {
    const position = { lat: 38.987122, lng: -94.668488}



    return (
        <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
            <div style={{width: '100%', height: '544px'}}>
                <Map mapId={process.env.REACT_APP_MAP_ID} zoom={9} center={position}></Map>
            </div>
        </APIProvider>
    )
}