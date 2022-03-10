import React from 'react'
import './Pagination.scss'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
        <button onClick={changePageDown}><ChevronLeftIcon className={currentPage === 1 ? "arrow disabled" : "arrow"} /></button>
            {pagesList}
        <button onClick={changePageUp}><ChevronRightIcon className={currentPage === pages ? "arrow disabled" : "arrow"}/></button>
    </div>
  )
}

export default Pagination