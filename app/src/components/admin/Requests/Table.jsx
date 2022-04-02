import { Table, Container } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../../utils';
import TableRow from './TableRow';

export default function TableDec(props) {
  const { data, error } = useSWR('/api/test-counter', fetcher);

  if (error) return <div>Ошибка загрузки</div>;
  if (!data) return <div>загрузка...</div>;

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Роль</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
      data.length ? data.map(
        (user, idx) => (<TableRow key = {user.id} count = {idx} user = {user}/>),
      )
      : <Container className="md-container">Новых заявок на регистрацию нет...</Container>
    }
    </tbody>
    </Table>
  );
}
