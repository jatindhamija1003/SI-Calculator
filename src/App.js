import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)

  const [Add, setAdd] = useState(0)
  const [Total, setTotal] = useState(0)
  const calcSum = (e) => {
    e.preventDefault()
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert("Enter Valid Value")
    } else {
      let Add = parseInt(num1) * parseInt(num2) * parseInt(num3) / 100
      setAdd(parseInt(Add))
      let Total = parseInt(num1) + parseInt(Add)
      setTotal(parseInt(Total))
    }
  }
  const handleClick = (e) => {
    setAdd(0)
    window.location.reload()

  }
  return (
    <div className="app">
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>SI Calculator</h1>
          <p className='heading_two'>Calculate Your SI Easily</p>
        </div>


        <div className='total_amount_card'>
          <div className='card_text'>
            <h3 className='total_amount_heading'>Total Interest:  $ {Add}</h3>
            <h3 className='total_amount_heading'>Total Value:  $ {Total}</h3>
          </div>
        </div>

        <form onSubmit={calcSum}>

          <div className='input_field'>
            <div className='input_field'>
              <TextField type='number' value={num1 || ""} onChange={(e) => setNum1(e.target.value)} label="$ Principal Amount" />
            </div>
            <div className='input_field'>
              <TextField type='number' value={num2 || ""} onChange={(e) => setNum2(e.target.value)} label="$ Rate of Interest" />
            </div>
            <div className='input_field'>
              <TextField type='number' value={num3 || ""} onChange={(e) => setNum3(e.target.value)} label="$ Time Period (Years)" />
            </div>
          </div>
          <div className='button_collection'>
            <Stack spacing={2} direction="row">
              <Button type='submit' className='btn-one' variant='contained' >Calculate</Button>
              <Button className='btn-one' onClick={handleClick} variant="outlined">Reset</Button>
            </Stack>

          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
