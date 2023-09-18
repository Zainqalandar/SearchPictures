import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Searchimag from './components/Searchimag'
import ThemeBtn from './components/Themebtn'

function App() {
  console.log('Apps')
  const [term, setTerm] = useState('life')
  const [onLoading, setOnLoading] = useState(true)
  const [images, setImages] = useState([])
  const [darkMode, setdarkMode] = useState('light')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=39461836-2e849ef976e11309a6f81194c&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setOnLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(darkMode)
  }, [darkMode])

  let handleClick = () => {
    if (darkMode == 'dark') {
      setdarkMode('light')
    }
    else {
      setdarkMode('dark')
    }

  }
  return (
    <div className='dark:bg-gray-800'>
      <div className=''>
        <div className=' relative top-4 left-3 '>
          <ThemeBtn handleClick={handleClick} darkMode={darkMode}/>
        </div>
        <Searchimag setTerm={setTerm} />
      </div>
      <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 p-2 border-2'>
        {!onLoading && images.length == 0 && <h1 className=' text-4xl font-bold text-center border'>Image not Found</h1>}
        <Cards onLoading={onLoading} images={images} />
      </div>
    </div>
  )
}

export default App
