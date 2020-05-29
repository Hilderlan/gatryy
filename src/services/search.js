import Api from './api';
 
const SearchService = {
  index: (params) => Api.get('/promotions?_embed=comments', { params }),
  // show: (id) => Api.get(`/albums/${id}`)
}
 
export default SearchService;