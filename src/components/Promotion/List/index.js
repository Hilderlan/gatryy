import React from 'react';
import PromotionCard from '../../../components/Promotion/Card';
import './styles.css';

const PromotionList = ({ promotions, loading, error }) => {
  if(error){
    return <div>Algum erro ocorreu...</div>
  }
  
  if(loading || !promotions){
    return <div>Carregando...</div>
  }

  if(!promotions.length) {
    return <div>Nenhum resultado encontrado...</div>
  }

  return(
    <div className="promotions-list">
      { promotions.map((promotion) =>
      <PromotionCard promotion={ promotion } />
    ) }
    </div>
  );
}

export default PromotionList;