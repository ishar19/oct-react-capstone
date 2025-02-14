export async function getNews() {
    const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-01-14&sortBy=publishedAt&apiKey=55516c51eb12421faae0d81b2d55a808")
    const data = await res.json()
    return data
}