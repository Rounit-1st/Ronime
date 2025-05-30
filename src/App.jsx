import React from 'react';
import Home from './Routes/Home';
import PageComponent from './Routes/PageComponent';
import Search from "./Routes/Search"
import User from './Routes/user';
import { Route,Routes } from 'react-router-dom';
import DetailsPage from './Routes/DetailsPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/movies' element={<PageComponent pageName='Movies'/>}/>
        <Route path='/tv_shows' element={<PageComponent pageName='TV Shows'/>}/>
        <Route path='/*' element={<div className='text-4xl'>Invalid Route</div>}/>
        <Route path='/search/:query' element={<Search />} />
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/user/:userID' element={<User/>} />
        <Route path='/watchlist/:userID' element={<PageComponent pageName='Watch List' />} />
      </Routes>

      {/* Home Page */}
      {/* <Navbar/>
      <NewReleaseHighlights/>
      <ScrollSection sectionName='Trending'/>
      <ScrollSection sectionName='Popular Movies'/>
      <ScrollSection sectionName='Popular Shows'/>
      <Footer/> */}
      
      {/* Content Details */}
      
    </>
  )
}

export default App;
