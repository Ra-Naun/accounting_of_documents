import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../../utils';
import TableRow from './TableRow';

export default function TableDec(props) {
  const [searchText, setSearchText] = useState('');
  const query = `page=${1}&searchQuery=${searchText}`;
  const { data, error } = useSWR(`/api/shop/get-orders?${query}`, fetcher, { refreshInterval: 11150 });

  if (error) return <div>Ошибка загрузки</div>;
  if (!data) return <div>Загрузка...</div>;

  console.log('~| data: ', data);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Наименование</th>
        <th>Кол-во</th>
        <th>Статус</th>
        <th>Дата заказа</th>
        <th>Цена</th>
        <th>Склад</th>
        <th>Получение</th>
      </tr>
    </thead>
    <tbody>
    {
      data?.orders?.length ? data?.orders.map(
        (item, idx) => (<TableRow key = {item.id} count = {idx} item = {item}/>),
      )
      : <Container className="md-container">Ничего нет...</Container>
    }
    </tbody>
    </Table>
  );
}
