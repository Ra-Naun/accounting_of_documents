import { Container, Row, Card, Button } from 'react-bootstrap';
import Table from './Table';

export default function Orders() {
  return (
    <Container className="md-container orders-table">
      <Card className="md-container">
        <Card.Body>
          <Card.Title>Заказы</Card.Title>
            <Table />
        </Card.Body>
      </Card>
    </Container>
  );
}
