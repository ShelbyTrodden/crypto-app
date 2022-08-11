export default class CryptoService {  
  static async getCoin(id) {
    try {
      const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${id}&interval=1d,30d&per-page=100&page=1`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}