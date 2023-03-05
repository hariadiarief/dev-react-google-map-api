import { InputPlaceAutocomplete } from "./Components";
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useEffect, useState } from "react";


export default function App() {
  const selectedLocation = useSelector((state) => state.googleMap.selectedLocation)
  const [isIframeLoading, setIsIframeLoading] = useState(true)

  useEffect(() => setIsIframeLoading(true), [selectedLocation])

  return (
    <div className={`p-8 ${!selectedLocation && 'grid place-items-center h-screen'}`}>
      <InputPlaceAutocomplete placeholder='Search your location' style={{ width: '100%' }} />
      {
        !selectedLocation
          ? null
          : <>
            <div className={`spin-container${isIframeLoading ? '--active' : ''}`}>
              <Spin size="large" />
            </div>
            <iframe
              style={{ visibility: isIframeLoading ? 'hidden' : 'visible' }}
              onLoad={() => setIsIframeLoading(false)}
              className="mt-8"
              title='map'
              width="100%"
              height="450"
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=""${!selectedLocation ? '' : encodeURI(selectedLocation)}`}
            />
          </ >
      }

    </div >
  )
}