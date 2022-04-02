import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Decide({ user }) {
  console.log('~| user: ', user);

  const decideYes = () => {
    axios.post('/api/admin/activate-user', { /* token */ userId: user.id });
  };

  const decideNo = () => {
    axios.post('/api/admin/delete-user', { /* token */ userId: user.id });
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
