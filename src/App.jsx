
import { useState } from 'react'
import './App.css'
import { Stack,Button } from '@mui/material'

function App() {
  const [bgColor,setBgcolor] = useState("brown")
  const changeColor = (color) =>{ 
  setBgcolor(color)
}
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center  '>
    <div style={{width:'600px',height:'500px',backgroundColor:bgColor}} className=' p-3 rounded shadow  d-flex  flex-column justify-content-center align-items-center '>
      <h1 className='text-dark fw-bolder mb-5'>Background Color Change</h1>
   
      <Stack direction="row" spacing={2}>
      <Button onClick ={() =>changeColor('red')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">RED</Button> 
      <Button onClick ={() =>changeColor('blue')}style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">BLUE</Button> 
      <Button onClick ={() =>changeColor('yellow')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">YELLOW</Button> 
      <Button onClick ={() =>changeColor('pink')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">PINK</Button> 
      </Stack>
     
    </div>
  </div>
  )
}

export default App
