import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import { Testimonial } from './components/Testimonial'
import Footer from './components/footer'
import { FAQ } from './components/Faq'
import Contact from './components/Contact'

function App() {

  return (
    <div>
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
