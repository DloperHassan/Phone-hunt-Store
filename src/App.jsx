import { useState } from 'react'
import Products from './componant/Product/Products'
import './style.css'
import { Button, ButtonGroup } from 'react-bootstrap'
import Coarousel from './componant/Carousel'
 


function App() {
   

  return (
    <>
     <Coarousel></Coarousel>
     <br />
       <h3 className='hpo' >Phone</h3>
       <br />
      <Products></Products>
    </>
  )
}

export default App
