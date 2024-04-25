export async function callApi(apiUrl, params) {
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
