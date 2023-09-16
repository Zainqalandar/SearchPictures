import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Searchimag from './components/Searchimag'

function App() {
  console.log('Apps')
  const [term, setTerm] = useState('life')
  const [onLoading, setOnLoading] = useState(true)
  const [images, setImages] = useState()

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=39461836-2e849ef976e11309a6f81194c&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setOnLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])
  return (
    <>
      <div>
        <Searchimag setTerm={setTerm} />
      </div>
      <div className=' grid grid-cols-3 justify-center gap-5 p-2 border-2'>
        {!onLoading && images.length == 0 && <h1 className=' text-4xl font-bold text-center border'>Image not Found</h1>}
        <Cards  onLoading={onLoading} images={images} />
      </div>
    </>
  )
}

export default App