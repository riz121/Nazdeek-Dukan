
import React, {Component}from 'react'

class Card extends Component {

render()
{
    return(

        <Card style={{ width: "15rem" }} key={index} className="box">
        <Card.Img variant="top" src={sampleImage} alt="Product Image" />
        <Card.Body className="cardDesc">
        <Card.Title>{this.state.category.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Link to="/Products">
            <Button variant="primary" text-align="Center">
              Show Products
            </Button>
          </Link>
        </Card.Body>
      </Card>

    )
}
}
export default Card;