import Api from './api';
 
const PromotionsService = {
  create: (values) => Api.post('/promotions', values),
  update: (values, id) => Api.put(`/promotions/${id}`, values),
  edit:   (id) => Api.get(`/promotions/${id}`)
}
 
export default PromotionsService;