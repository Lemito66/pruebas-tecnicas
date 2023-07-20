import Card from 'react-bootstrap/Card';

export function CardPicture({cover}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cover} />
    </Card>
  );
}

