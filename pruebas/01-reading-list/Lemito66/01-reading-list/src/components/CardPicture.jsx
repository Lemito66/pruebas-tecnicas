import Card from 'react-bootstrap/Card';

export function CardPicture({cover}) {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={cover} />
    </Card>
  );
}

