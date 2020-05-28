import React from 'react';
import { useParams } from 'react-router-dom';

const PromotionFormScreen = () => {
  const { id } = useParams();

  return (
    <div>
      FORM
      { id && <div>Form com id: {id} </div> }
    </div>
  )
}

export default PromotionFormScreen;