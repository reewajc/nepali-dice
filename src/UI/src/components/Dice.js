import React from 'react'
import Card from 'react-bootstrap/Card';


function Dice({ image, name }) {
  return (
    <div className='col-md-4 col-lg-4' >
    <Card id='diceCard'>
    <Card.Img variant="top" src={image}  id='cardImg'/>
    <Card.Body>
      <Card.Text id='cardText'>
        {name}
      </Card.Text> 
    </Card.Body>
  </Card>
  </div>
  )
}

export default Dice