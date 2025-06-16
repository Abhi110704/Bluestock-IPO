import React from 'react';
import './Pagination.css';

const Pagination = ({ pageObj, requestQuery }) => {
  if (!pageObj || !pageObj.is_paginated) {
    return null; // Don't render pagination if not paginated
  }

  const renderPageLinks = () => {
    const links = [];
    const queryParam = requestQuery ? `&q=${requestQuery}` : '';

    if (pageObj.has_previous) {
      links.push(
        <a key="previous" href={`?page=${pageObj.previous_page_number}${queryParam}`}>Previous</a>
      );
    }

    for (let i = 0; i < pageObj.paginator.num_pages; i++) {
      const pageNum = i + 1;
      if (pageObj.number === pageNum) {
        links.push(<span key={pageNum} className="current">{pageNum}</span>);
      } else {
        links.push(
          <a key={pageNum} href={`?page=${pageNum}${queryParam}`}>{pageNum}</a>
        );
      }
    }

    if (pageObj.has_next) {
      links.push(
        <a key="next" href={`?page=${pageObj.next_page_number}${queryParam}`}>Next</a>
      );
    }

    return links;
  };

  return (
    <div className="pagination">
      {renderPageLinks()}
    </div>
  );
};

export default Pagination; 