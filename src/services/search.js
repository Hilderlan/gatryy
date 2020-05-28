import Api from './api';
 
const SearchService = {
  index: () => Api.get('/promotions?_embed=comments'),
  // show: (id) => Api.get(`/albums/${id}`)
}
 
export default SearchService;