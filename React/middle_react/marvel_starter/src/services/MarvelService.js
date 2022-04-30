
class MarverlService {
    getResourse = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.join()
    }

    getAllCharacter = () => {
        return this.getResourse('https://gateway.marvel.com:443/v1/public/characters?apikey=31d33e82d3eacb5610bd719a4bab98e3')
    }
}

export default MarverlService