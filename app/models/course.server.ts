export const getCourse = async () => {
    const response = await fetch(`${process.env.API_URL}/curso?populate=image`)
    return await response.json()
}