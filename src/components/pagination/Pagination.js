import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();


    useEffect(() => {
        axios.get(currentPage).then(res => {
            setNextPage(res.data.next)
            setPrevPage(res.data.previous)
        })

    }, [currentPage])

    const nextPageHandler = () =>{
        setCurrentPage(nextPage);
    }

    const prevPrevHandler= () =>{
        setCurrentPage(prevPage)  
      }

  return (
    <div>

    </div>
  )
}
