
export const getGuitars = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}/guitars?populate=*`)
        if (!response.ok) {
            throw new Error('Error al obtener datos');
        }
        const result = await response.json();
        return result
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};