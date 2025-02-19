import React from 'react'
import { useDataContext } from '../../../Contexts/SearchContext';
import "./SearchResult.scss"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SearchResult = () => {
      const {t} = useTranslation()
  const { filteredItems} = useDataContext();  
  // console.log(filteredItems);
  // console.log("Items Name",filteredItems);
  return (

    <main>

    <section id="searchPage">

<div className="container">

    {filteredItems.length > 0 ? (
      <div className='row'>
      {filteredItems.map((result, index) => (
        <div className="col-lg-4">
          <Link to={`/product/${result.id}`}>
          <div className="cart">
            <div className="cardImg">
              <img src={result.image} alt="" /></div>
          </div>
          <div className="cardText">
            <h3>{t(result.productName)}</h3>
            <p>{result.productWeight}</p>
          </div>
        </Link>
        </div>
        ))}
        </div>
        ) : (
          <p>No results found.</p>
          )}
</div>
  </section>
          </main>
  )
}

export default SearchResult