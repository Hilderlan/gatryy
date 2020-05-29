import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import SearchService from '../../../services/search';
import PromotionList from '../../../components/Promotion/List';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {}
    if(search) {
      params.title_like = search
    }

    SearchService.index(params)
      .then((response) => {
        setPromotions(response.data);
      });
  }, [search]);

  return (
    <div className="promotions-search">
      <header className="promotions-search__header">
        <h1>Gatryy</h1>
        <Link to="create">Nova promoção</Link>
      </header>
      <input type="search" placeholder="Buscar" value={ search } onChange={(e) => setSearch(e.target.value)} className="promotions-search__input" />

      <PromotionList promotions={ promotions } loading={ !promotions.length } />
    </div>
  )
}

export default PromotionSearch;