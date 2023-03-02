import { InputPlaceAutocomplete } from "./Components";
import { useSelector } from 'react-redux';

export default function App() {
  const selectedLocation = useSelector((state) => state.googleMap.selectedLocation)

  return (
    <div>
      <InputPlaceAutocomplete placeholder='input search text' style={{ width: '100%' }} />
      <iframe
        title='map'
        width="600"
        height="450"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=""${!selectedLocation ? '' : encodeURI(selectedLocation)}`}
      />
    </div>
  )
}