import { useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../../utils';
import TableRow from './TableRow';

const MATCHER = {
  'Текущие': 'В процессе',
  'Доступные': 'Готово к доставке',
  'История': ''
}

export default function TableDec(props) {
  const [searchText, setSearchText] = useState('');
  const query = `page=${1}&searchQuery=${searchText}`;
  const { data, error } = useSWR(`/api/delivery/get-orders?${query}`, fetcher, { refreshInterval: 150 });
  const [section, setSection] = useState('Текущие')

  if (error) return <div>Ошибка загрузки</div>;
  if (!data) return <div>Загрузка...</div>;

  const checkActive = (sec) => sec === section ? 'primary' : 'outline-secondary'

  console.log('~| data: ', data);
  const filteredData = ['Текущие', 'Доступные'].includes(section) ? data?.courerOrders?.filter((item) => item.status === MATCHER[section]) : data?.courerOrders
  return (
    <>
    <div className='ml-auto col-8 pb-3'>
        <Button className='mx-2 px-3' onClick={() => setSection('Текущие')} variant={checkActive('Текущие')}>
          Текущие
        </Button>
        <Button className='mx-2 px-3' onClick={() => setSection('Доступные')} variant={checkActive('Доступные') }>
          Доступные
        </Button>
        <Button className='mx-2 px-3' onClick={() => setSection('История')} variant={checkActive('История')} >
          История
        </Button>
      </div>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Наименование</th>
        <th>Кол-во</th>
        <th>Номер склада</th>
        <th>Дата заказа</th>
        <th>Цена</th>
        {section !== 'История' && <th>Статус</th>}
      </tr>
    </thead>
    <tbody>
    {
      filteredData.length ? filteredData.map(
        (item, idx) => (<TableRow section={section} key = {item.id} {...item}/>),
      )
      : <Container className="md-container">Ничего нет...</Container>
    }
    </tbody>
    </Table>
    </>
  );
}
