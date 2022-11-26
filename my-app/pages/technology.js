import React from 'react';
import Footer from '../components/Footer/footer';
import NavigationBar from '../components/Navbar/Navigationbar';
import CategoryLaunched from '../components/CategoryLaunchedProjs/categorylaunched';
import PopNew from '../components/Popular&new_projects/pop&new';

function Technology() {
  return (
    <>
        <NavigationBar/>
        <CategoryLaunched/>

        <PopNew/>
        
        <Footer />
    </>
  );
}

export default Technology;