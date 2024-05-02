/**
 * Fonction pour appeler l'API.
 * @param {string} apiUrl - L'URL de l'API.
 * @param {string} params - Les paramètres de la requête.
 * @returns {Promise<Object|null>} Les données de la réponse de l'API ou null en cas d'erreur.
 */

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
