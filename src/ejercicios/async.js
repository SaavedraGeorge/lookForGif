
const getImage = async () => {

    try {
        const apiKey = 'RnEF8yRds3AbeA1dwodA8cVzJlZfDyZF';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        /// manejo de errores
        console.log(error)
    }

    ;
}
getImage();