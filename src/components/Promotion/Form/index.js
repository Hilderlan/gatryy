import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UIContainer from '../../UI/Container';
import PromotionsService from '../../../services/promotions';
import './styles.css'

const initialValues = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  function onChange(e){
    const { name, value } = e.target;

    setValues({...values, [name]:value});
  }

  function onSubmit(e) {
    e.preventDefault();

    PromotionsService.create(values)
      .then((response) => {
        history.push('/');
      });
  }

  return(
    <UIContainer>
      <h1>Gatryy</h1>
      <h1>Nova promoção</h1>

      <form onSubmit={ onSubmit }>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input id="title" type="text" name="title" onChange={ onChange } />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input id="url" type="text" name="url" onChange={ onChange } />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input id="imageUrl" type="text" name="imageUrl" onChange={ onChange } />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input id="price" type="number" name="price" onChange={ onChange } />
        </div>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>

    </UIContainer>
  );
}

export default PromotionForm;