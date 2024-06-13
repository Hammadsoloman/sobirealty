import React, { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
  AdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { Input } from "@chakra-ui/react";

export default function PlaceAutocomplete({ selectedPlace, onPlaceSelect }) {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
   // setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);
console.log(placeAutocomplete)
  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);
  console.log(selectedPlace);
  return (
    <div className="autocomplete-container">
      <Input
       ref={inputRef}
        value={selectedPlace}
        placeholder="Address"
      />
    </div>
  );
}
