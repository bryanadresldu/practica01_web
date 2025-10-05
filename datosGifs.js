const obtenerGifs = async () => {

        const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=goku&limit=5");

        const respuesta = await request.json();

        const gifUrl = respuesta.data[0].images.original.url;

        const img = document.querySelector("#gif");

        img.src = gifUrl;
    
};

obtenerGifs();

