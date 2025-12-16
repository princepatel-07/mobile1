import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const GridExample = () => {
  const cardData = [
    {
      img: "https://avatars.mds.yandex.net/i?id=f21456869e53baec4b575e73b9bed78ee081e0d4-9107083-images-thumbs&n=13",
      title: "Apple Support",
      text: " Use the Find My app to enable Repair Mode, which locks down your personal data while allowing technicians to service the device without access. "
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=deb2e82363d098fb671600147f550bbbb8a66bb4-5219321-images-thumbs&n=13",
      title: "Repair Mode (iOS 17.5+)",
      text: " Use the Find My app to enable Repair Mode, which locks down your personal data while allowing technicians to service the device without access. "
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=81d14c28858d4236078aaa8c84827c49045c465d-15260219-images-thumbs&n=13",
      title: "Screen/Battery",
      text: "Common, potentially costing around ₹1499 (approx $18 USD) or more, depending on the shop and model.."
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=8c37bc41f546967e5dfd8c286bb421e1dfcbf11e-10952956-images-thumbs&n=13",
      title: "Apple Repair",
      text: "You can do more than shop and learn in an Apple Store. Start a repair request below to make a reservation with a Genius to get help with a hardware repair.."
    }
    
  ];

  return (
    
    
    <Row xs={1} md={2} lg={2} className="g-4">
      
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
          
            <Card.Img
              variant="top"
              src={card.img}
              style={{ height: "400px" , objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default GridExample;
