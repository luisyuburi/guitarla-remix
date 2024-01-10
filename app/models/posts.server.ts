export const getPosts = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
        if (!response.ok) {
            throw new Error('Error al obtener datos');
        }
        const result = await response.json();
        return result
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export const getPostByUrl = async (url:string) => {
    try {
        const response = await fetch(`${process.env.API_URL}/posts/?filters[url]=${url}&populate=image`)
        if (!response.ok) {
            throw new Error('Error al obtener datos');
        }
        const result = await response.json();
        return result.data[0]
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};