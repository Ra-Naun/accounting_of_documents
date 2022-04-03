import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { fetcher } from '../../utils';


const info = {
  'rejected': {
    word: 'secondary',
    t: 'Отказ'
  },
  'created': {
    word: 'success',
    t: 'Создан'
  },
  'available': {
    word: 'info',
    t: 'Доступен'
  },
  'progress': {
    word: 'warning',
    t: 'В процессе'
  },
  'confirmed': {
    word: 'primary',
    t: 'Доставлен'
  }
}

function Delivery() {
    const [section, setSection] = useState('currently')
    const { data, error } = useSWR('/api/orders/list', fetcher, { refreshInterval: 150 });
    const fieldsCurrently = ['Наименование', 'Кол-во', 'Номер склада', 'Дата заказа', 'Цена', 'Cтатус']
    const historyFields = fieldsCurrently.slice(0, fieldsCurrently.length - 1)
    
    if (error) return <div>Ошибка загрузки</div>;
    if (!data) return <div>Загрузка...</div>;

    const checkActive = (sec) => sec === section ? 'primary': 'outline-secondary'

    const renderStatus = (status) => <Button variant={info[status].word}>{info[status].t}</Button>

    const updateStatus = async (id) => {
      try {
        await fetch('/api/orders/update', { method: "POST", headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }, body: JSON.stringify({id})})
        toast.success('Статус заказа успешно обновлен')
      } catch (error) {
        toast.error('Не удалось обновить заказ')
      }
      
    }

    const config = {
        'currently': fieldsCurrently,
        'available': historyFields,
        'history': historyFields
    }
    const onlyAv = ['available', 'currently'].includes(section)
    const orders = onlyAv ? data.orders.filter((item) => item.status === section) : data.orders
  return (
    <>
     <Container className="md-container bg-light my-3" style={{minHeight: '500px'}}>
      <div className='row d-flex align-items-center justify-content-between'>
        <div className='col-4'><h1>Заказы</h1></div>
        <div className='col-8'>
          <Button size='lg' className='mx-2 px-3' onClick={() => setSection('currently')} variant={checkActive('currently')}>
            Текущие
          </Button>
          <Button size='lg' className='mx-2 px-3' onClick={() => setSection('available')} variant={checkActive('available')}>
            Доступные
          </Button>
          <Button size='lg' className='mx-2 px-3' onClick={() => setSection('history')} variant={checkActive('history')}>
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
    {orders.map(({id, name, ammount, storeNumber, createdAt, price, status}, index) => <tr key={`${name}-${index}`}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{ammount}</td>
      <td>{storeNumber}</td>
      <td>{createdAt}</td>
      <td>${price}</td>
      {section !== 'history' && <td>{section === 'available' ? <Button variant='primary' onClick={() => updateStatus(id)} style={{minWidth: '140px'}}>Принять</Button> : renderStatus(status)}</td>}
    </tr>)}
  </tbody>
</Table>
      </div>
    </Container>
    </>

  );
}

export default Delivery;
