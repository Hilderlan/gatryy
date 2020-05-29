import Api from './api';
 
const SearchService = {
  index: (params) => Api.get('/promotions?_embed=comments&_order=desc&_sort=id', { params }),
  // show: (id) => Api.get(`/albums/${id}`)
}
 
export default SearchService;