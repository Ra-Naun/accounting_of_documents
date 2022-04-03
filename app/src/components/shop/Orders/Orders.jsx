import { useState } from 'react';
import useSWR from 'swr';
import { Container, Card, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { fetcher } from '../../../utils';
import SearchField from './SearchField/SearchField';
import Table from './Table';

export default function Orders() {
  const [doc, setDoc] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

  const limit = 5;
  const query = `page=${page + 1}&searchQuery=${searchQuery}&limit=${limit}`;
  const { data, error } = useSWR(`/api/shop/get-orders?${query}`, fetcher, { refreshInterval: 150 });

  if (error) return <div>Ошибка загрузки</div>;
  if (!data) return <div>Загрузка...</div>;

  const { orders, totalCount } = data;

  const onChange = e => {
    const value = e.target.name === 'role' ? e.target.text : e.target.value;
    setDoc(value);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected);
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

          <Table orders={orders}/>
          <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={Math.ceil(totalCount / limit)}
              forcePage={page}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
        </Card.Body>
      </Card>
    </Container>
  );
}
