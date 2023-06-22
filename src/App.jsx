import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import { Testimonial } from './components/Testimonial'
import Footer from './components/footer'
import { FAQ } from './components/Faq'
import Contact from './components/Contact'
import Logo from './assets/CAT.png';

function App() {

  return (
    <div>
      <a href = "#main" className="absolute rounded-full shadow-lg hover:scale-105 cursor-pointer p-1 top-1 left-3 z-[99] duration-500 max-h-ms max-w-ms lg:max-h-xxxs lg:max-w-xxxs" >
        <img src = {Logo} className=' ' />
      </a>
      <Sidenav />
      <Main />
      <Work />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
