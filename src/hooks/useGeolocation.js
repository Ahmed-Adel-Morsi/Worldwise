import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;

        setPosition({ lat, lng });
        setIsLoading(false);

        navigate(`form?lat=${lat}&lng=${lng}`);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  }

  return { isLoading, error, position, getPosition };
}
