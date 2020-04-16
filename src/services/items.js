import httpClient from '../helpers/HttpClient'
export default  {
    allItems() {
        return httpClient.get('/photos').then(res=>res.data);
    }
}