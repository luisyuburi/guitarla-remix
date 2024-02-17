export const fotmatDate = (date: Date) => {
    const newDate = new Date(date)
    const options: any = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('en-EN', options)
}
