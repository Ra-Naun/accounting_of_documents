import { Container, Row, Card, Button, Form } from 'react-bootstrap';
import Orders from '../../components/shop/Orders/Orders';

export default function Home() {
  return (
    <Container className="md-container">
      <Orders/>
    </Container>
  );
}
