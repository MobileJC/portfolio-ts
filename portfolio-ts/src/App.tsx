import './App.css'
import Projects from './sections/Projects'
import ImageList from './data/ImageList'

function App() {

  return (
    <>
      <Projects images={ImageList} />
    </>
  )
}

export default App
