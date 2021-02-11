import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './userCard'
import './Analytical.css'

const AllUserSearch = () => {
  const dispatch = useDispatch();
  const userSearch = useSelector((store) => store.aureliusUserSearch)  
  const [search, setSearch] = useState();  
  

  const searchAllUsers = () => {
    dispatch({ type: 'FETCH_AURELIUS_USER', payload: search })
}

    return (
        <div>
            <input 
                className="search-input" 
                placeholder="Search Aurelius By User Email" 
                onChange={(e) => setSearch(e.target.value)} 

            />
            <button className="btnI" onClick={searchAllUsers}>Find</button>
            <div className='allCardContainer'>
                {
                    userSearch.map((item, i) => {
                        return (
                            <div className='singleCardContainer' key={i}>
                                <UserCard item={item} search={search} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllUserSearch