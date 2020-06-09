import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import useApi from '../../utils/useApi';
import PromotionList from '../../../components/Promotion/List';

const PromotionSearch = () => {
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url: '/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined
    }
  });

  useEffect(() => {
    load();
  }, [search]);

  return (
    <div className="promotions-search">
      <header className="promotions-search__header">
        <h1>Gatryy</h1>
        <Link to="create">Nova promoção</Link>
      </header>
      <input type="search" placeholder="Buscar" value={ search } onChange={(e) => setSearch(e.target.value)} className="promotions-search__input" />

      <PromotionList promotions={ loadInfo.data } loading={ loadInfo.loading } error={ loadInfo.error } />
    </div>
  )
}

export default PromotionSearch;