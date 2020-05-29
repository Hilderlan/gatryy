import React from 'react';
import { useParams } from 'react-router-dom';
import PromotionForm from '../../../components/Promotion/Form';

const PromotionFormScreen = () => {
  const { id } = useParams();

  return (
    <div>
      <PromotionForm id={ id ? Number.parseInt(id, 10) : null } />
    </div>
  )
}

export default PromotionFormScreen;