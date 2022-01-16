export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=8&api_key=RnEF8yRds3AbeA1dwodA8cVzJlZfDyZF`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    })


    return gifs ;
}