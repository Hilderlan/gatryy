import React, { useState, useEffect } from 'react';
import SearchService from '../../../services/search';
import PromotionCard from '../../../components/Promotion/Card';

const PromotionSearchScreen = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    SearchService.index()
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div className="App" style={{maxWidth: 800, margin: '30px auto'}}>
      { promotions.map((promotion) =>
        <PromotionCard promotion={ promotion } />
      ) }
    </div>
  )
}

export default PromotionSearchScreen;