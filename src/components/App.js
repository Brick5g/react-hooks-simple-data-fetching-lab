import React, { useEffect, useState } from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setDogImage(data.message))
      .catch((err) => {
        console.error(err);
        setDogImage(null);
      });
  }, []);

  if (!dogImage) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;

