export async function callApi(params) {
  const apiUrl = 'http://localhost:3000/user/'
  try {
    const response = await fetch(apiUrl + params)

    if (!response.ok) {
      throw new Error("Erreur lors de la requête à l'API")
    }

    const datas = await response.json()
    return datas
  } catch (error) {
    console.error('Erreur : ', error)
    return null
  }
}
