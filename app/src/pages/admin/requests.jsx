import { Container, Row, Card, Button } from 'react-bootstrap';
import Test from '../../components/common/Test/Test';

export default function Home() {
  return (
    <Container className="md-container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
