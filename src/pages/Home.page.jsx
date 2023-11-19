import AccordionAbout from '../components/AccordionAbout'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <>
      <header className='sticky top-0'>
        <Navbar />
        <AccordionAbout />
      </header>
    </>
  )
}

export default HomePage