import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../utils';

function Delivery() {
    const [section, setSection] = useState('currently')
    const { data, error } = useSWR('/api/orders/list', fetcher, { refreshInterval: 150 });
    const fieldsCurrently = ['Наименование', 'Кол-во', 'Номер склада', 'Дата заказа', 'Цена', 'Cтатус']
    const historyFields = fieldsCurrently.slice(0, fieldsCurrently.length - 1)

    const config = {
        'currently': fieldsCurrently,
        'available': historyFields,
        'history': historyFields
    }
    console.log(data)
  return (
    <>
     <Container className="md-container bg-light my-3" style={{minHeight: '500px'}}>
      <div className='row d-flex align-items-center justify-content-between'>
        <div className='col-4'><h1>Заказы</h1></div>
        <div className='col-8'>
          <Button className='mx-2 px-3' onClick={() => setSection('currently')} variant='primary'>
            Текущие
          </Button>
          <Button className='mx-2 px-3' onClick={() => setSection('available')} variant='outline-primary'>
            Доступные
          </Button>
          <Button className='mx-2 px-3' onClick={() => setSection('history')} variant='outline-primary'>
            История
          </Button>
        </div>
      </div>
      <div>
      <Table bordered hover>
  <thead>
    <tr>
      <th>#</th>
      {config[section].map((field, index) => <th key={field + index}>{field}</th>
        )}
    </tr>
  </thead>
  <tbody>
    {data && Array(data).map(({name}) => <tr><td>{name}</td></tr>)}
  </tbody>
</Table>
      </div>
    </Container>
    </>

  );
}

export default Delivery;
