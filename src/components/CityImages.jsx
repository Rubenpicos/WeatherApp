const getCityImage = async (cityName) => {
  const unsplashAccessKey = "jg0iFWjX3NAVoNtWkp9IdtD7768uM9nIYL3-lyTKjMw";
  const url = `https://api.unsplash.com/search/photos?query=${cityName}&per_page=1&client_id=${unsplashAccessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la imagen");
    }
    const data = await response.json();

    if (data.results.length === 0) {
      throw new Error("No se encontró ninguna imagen para esta ciudad");
    }

    return data.results[0].urls.regular;
  } catch (error) {
    console.error("Error al obtener la imagen de la ciudad:", error);
    return null;
  }
};

export default getCityImage;
