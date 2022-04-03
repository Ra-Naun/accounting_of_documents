import { Table, Container } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../../utils';
import TableRow from './TableRow';

export default function TableDec(props) {
  const { data, error } = useSWR('/api/admin/get-new-users', fetcher, { refreshInterval: 150 });

  if (error) return <div>Ошибка загрузки</div>;
  if (!data) return <div>Загрузка...</div>;

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
      data?.newUsers?.length ? data?.newUsers.map(
        (user, idx) => (<TableRow key = {user.id} count = {idx} user = {user}/>),
      )
      : <Container className="md-container">Новых заявок на регистрацию нет...</Container>
    }
    </tbody>
    </Table>
  );
}
