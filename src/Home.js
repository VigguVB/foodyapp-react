import React from 'react';
import Header from './Components/Header';
import Quicksearch from './Quicksearch';
import Search from './Search';
function Home(props) {
    return (
        <div>
            <Search />
            <Quicksearch/>
            
        </div>
    );
}

export default Home;