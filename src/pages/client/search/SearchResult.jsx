import React from 'react'
import { useDataContext } from '../../../Contexts/SearchContext';
import "./SearchResult.scss"

const SearchResult = () => {
  const { filteredItems} = useDataContext();  
  console.log(filteredItems);
  
  return (

    <main>

    <section id="searchPage">

<div className="container">

    {filteredItems.length > 0 ? (
      <div className='row'>
      {filteredItems.map((result, index) => (
        <div className="col-lg-4">
          <div className="cart">
            <div className="cardImg">
              <img src={result.image} alt="" /></div>
          </div>
          <div className="cardText">
            <h3>{result.productName}</h3>
            <p>{result.productWeight}</p>
          </div>
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