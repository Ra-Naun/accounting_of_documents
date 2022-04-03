import { useState } from 'react';
import { Container, Row, Card, Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import SearchField from './SearchField/SearchField';
import Table from './Table';

export default function Orders() {
  const [doc, setDoc] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  const limit = 5;

  const onChange = e => {
    const value = e.target.name === 'role' ? e.target.text : e.target.value;
    setDoc(value);
  };
  return (
    <Container className="md-container orders-table">
      <Card className="md-container">
        <Card.Body>
          <div className= {'orders-table__block'} >
            <Card.Title className= {'orders-table__title'}>Заказы</Card.Title>
            <div className= {'orders-table__search'} >
              <SearchField handleSearch={() => {}} setSearchQuery={setSearchQuery}/>
            </div>
          </div>

          <Form.Group>
            <DropdownButton className="mb-2 orders-table__dropdown" size="lg" id="dropdown-basic-button" title={ doc || 'Документы'}>
              <Dropdown.Item onClick={onChange} name="role">Товарная накладная по форме ТОРГ-12</Dropdown.Item>
              <Dropdown.Item onClick={onChange} name="role">Счет-фактура</Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          <Table searchText={searchQuery}/>
        </Card.Body>
      </Card>
    </Container>
  );
}
