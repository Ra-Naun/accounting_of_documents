import { Container, Row, Card, Button } from 'react-bootstrap';
import Table from './Table';

export default function Home() {
  return (
    <Container className="md-container requests">
      <Card className="md-container">
        <Card.Body>
          <Card.Title>Запросы на создание учетной записи</Card.Title>
            <Table />
        </Card.Body>
      </Card>
    </Container>
  );
}
