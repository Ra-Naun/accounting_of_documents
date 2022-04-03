import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import TableRow from './TableRow';

export default function TableDec({ orders }) {
  const sortTypes = {
    grow: 'grow',
    loss: 'loss',
  };

  const rowsMap = {
    Наименование: 'name',
    'Кол-во': 'count',
    Статус: 'status',
    'Дата заказа': 'orderDate',
    Цена: 'cost',
    Склад: 'storageId',
  };

  const [sortType, setSortType] = useState(true);
  const [selectedRow, setSelectedRow] = useState('');

  const clickOnRow = e => {
    const text = e.target?.innerHTML;
    const newSelectedRow = rowsMap[text];
    if (newSelectedRow !== selectedRow) {
      setSelectedRow(rowsMap[text] || '');
    }
    setSortType(!sortType);
  };

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th onClick={clickOnRow}>#</th>
        <th onClick={clickOnRow}>Наименование</th>
        <th onClick={clickOnRow}>Кол-во</th>
        <th onClick={clickOnRow}>Статус</th>
        <th onClick={clickOnRow}>Дата заказа</th>
        <th onClick={clickOnRow}>Цена</th>
        <th onClick={clickOnRow}>Склад</th>
        {orders.find(item => item.status === 'Ожидает') && <th>Получение</th>}
      </tr>
    </thead>
    <tbody>
    {
      orders?.length ? orders.map(
        (item, idx) => (<TableRow key = {item.id} count = {idx} item = {item}/>),
      ).sort((prev, next) => {
        if (!selectedRow) return 0;
        if (sortType) {
          return (prev[selectedRow] < next[selectedRow] ? -1 : 1);
        }
        return (prev[selectedRow] < next[selectedRow] ? 1 : -1);
      })
      : <Container className="md-container">Ничего нет...</Container>
    }
    </tbody>
    </Table>
  );
}
