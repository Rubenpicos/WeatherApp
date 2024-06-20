const CityImage = async (cityName) => {
  const unsplashAccessKey = "jg0iFWjX3NAVoNtWkp9IdtD7768uM9nIYL3-lyTKjMw";
  const url = `https://api.unsplash.com/search/photos?query=${cityName}&per_page=1&client_id=${unsplashAccessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Cant shoe the image");
    }
    const data = await response.json();
    console.log(data);

    if (data.results.length === 0) {
      throw new Error("Cant show the image");
    }

    return data.results[0].urls.regular;
  } catch (error) {
    console.error("Cant shoe the image:", error);
    return null;
  }
};

export default CityImage;
