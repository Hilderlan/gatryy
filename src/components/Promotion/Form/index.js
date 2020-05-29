import React, { useState, useEffect } from 'react';
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

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState( id ? null : initialValues);
  const history = useHistory();

  useEffect(() => {
    if(id){
      PromotionsService.edit(id)
        .then((response) => {
          setValues(response.data);
        });
    }
  }, [id]);

  function onChange(e){
    const { name, value } = e.target;

    setValues({...values, [name]:value});
  }

  function onSubmit(e) {
    e.preventDefault();

    if (id) {
      PromotionsService.update(values, id)
        .then(() => {
          history.push('/');
        });
    }
    else {
      PromotionsService.create(values)
        .then(() => {
          history.push('/');
        });
    }
  }

  return(
    <UIContainer>
      <h1>Gatryy</h1>
      { id
        ? (
        <h1>Editando promoção</h1>
      ) :
        <h1>Nova promoção</h1>
       }

      { !values
        ? <div>Carregando</div>
        : (
          <form onSubmit={ onSubmit }>
            <div className="promotion-form__group">
              <label htmlFor="title">Título</label>
              <input id="title" type="text" name="title" value={values.title} onChange={ onChange } />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="url">Link</label>
              <input id="url" type="text" name="url" value={values.url} onChange={ onChange } />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="imageUrl">Imagem (URL)</label>
              <input id="imageUrl" type="text" name="imageUrl" value={values.imageUrl} onChange={ onChange } />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="price">Preço</label>
              <input id="price" type="number" name="price" value={values.price} onChange={ onChange } />
            </div>

            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        )
      }
    </UIContainer>
  );
}

export default PromotionForm;