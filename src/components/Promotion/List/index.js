import React from 'react';
import PromotionCard from '../../../components/Promotion/Card';
import './styles.css';

const PromotionList = ({ promotions, loading }) => {
  if(loading){
    return <div>Carregando...</div>
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