import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import TableRow from './TableRow';

export default function TableDec({ orders }) {
  const sortTypes = {
    grow: 'grow',
    loss: 'loss',
  };

  const [sortType, setSortType] = useState(sortTypes.grow);
  const [selectedRow, setSelectedRow] = useState(-1);

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
        {orders.find(item => item.status === 'Ожидает') && <th>Получение</th>}
      </tr>
    </thead>
    <tbody>
    {
      orders?.length ? orders.map(
        (item, idx) => (<TableRow bySort={idx === selectedRow} key = {item.id} count = {idx} item = {item}/>),
      )
      : <Container className="md-container">Ничего нет...</Container>
    }
    </tbody>
    </Table>
  );
}
