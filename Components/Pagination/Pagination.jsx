import React from 'react'
import './Pagination.scss'

const Pagination = ({pages, setPage, currentPage}) => {

    const pagesArray = [];

    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);

    }

    const pagesList = pagesArray.map((e, index)=>{
        return(
            <b className={index +1 === currentPage ? 'numbers active' : 'numbers'} onClick={()=>{setPage(e)}}>{e}</b>
        )
    })
    function changePageUp(){
        currentPage === pages ? <></> : setPage(currentPage += 1)
    }
    function changePageDown(){
        currentPage === 1 ? <></> : setPage(currentPage - 1)

    }

  return (
    <div className="pagination">
        <button onClick={changePageDown}>-</button>
            {pagesList}
        <button onClick={changePageUp}>+</button>
    </div>
  )
}

export default Pagination