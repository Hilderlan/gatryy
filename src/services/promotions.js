import Api from './api';
 
const PromotionsService = {
  create: (values) => Api.post('/promotions', values),
}
 
export default PromotionsService;