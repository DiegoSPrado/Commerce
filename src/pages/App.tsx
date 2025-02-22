import '../styles/App.css'
import { HomeHeader } from '../components/HomeHeaderComponents/HomeHeader';
import { FrameCategory } from '../components/HomeHeaderComponents/FrameCategory';
import { FooterComponent } from '../components/HomeComp/FooterComponent';
import { Outlet } from 'react-router-dom';



function App() {
   
  
  return (
   <div >
      <HomeHeader/>
      <section className='sectionDiv'>
        <div className='carouselContainer'>
          <FrameCategory />
        </div>
        <Outlet/>
      </section>
      <FooterComponent/>
      
   </div>
  )
}

export default App
