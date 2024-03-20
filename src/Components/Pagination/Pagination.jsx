// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, total_pages, onNextPage, onPageChange }) => {
  // Array de números de página para exibição
  const pageNumbers = [];
  const maxButtons = 5;

  //gera os números de página a serem exibidos
  for (let i = 1; i <= total_pages; i++) {
    pageNumbers.push(i);
  }

  //lógica para exibir apenas um número limitado de botões de pagina
  let startIndex = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
  let endIndex = Math.min(startIndex + maxButtons - 1, total_pages);

  if (endIndex - startIndex + 1 < maxButtons){
    startIndex = Math.max(endIndex - maxButtons + 1, 1);
  }

  const visiblePageNumbers = pageNumbers.slice(startIndex - 1, endIndex);

  return (
    <div className="pagination">
      {/* Botão de página anterior */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#828282ac">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      {/* Números de página */}
      {visiblePageNumbers.map(number => (
        // eslint-disable-next-line no-undef
        <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}

      {/* Botão de próxima página */}
      <button onClick={onNextPage} disabled={currentPage === total_pages}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#828282ac">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;

