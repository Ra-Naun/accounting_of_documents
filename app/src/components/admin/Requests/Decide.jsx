import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useSWRConfig } from 'swr';

export default function Decide({ user }) {
  const { mutate } = useSWRConfig();

  const decideYes = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    axios.post('/api/admin/activate-user', { /* token */ userId: user.id });
    mutate('/api/admin/get-new-users');
  };

  const decideNo = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    axios.post('/api/admin/delete-user', { /* token */ userId: user.id });
    mutate('/api/admin/get-new-users');
  };

  return (
    <div className="decide">
      <Button className="decide__yes" onClick={decideYes}>
        Одобрить
      </Button>
      <Button className="decide__no" variant="outline-primary" onClick={decideNo}>
        Отклонить
      </Button>
    </div>
  );
}
