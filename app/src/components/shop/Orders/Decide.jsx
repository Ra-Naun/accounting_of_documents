import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useSWRConfig } from 'swr';

export default function Decide({ item }) {
  const { mutate } = useSWRConfig();

  const decideYes = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    axios.post('/api/shop/close-order', { /* token */ itemId: item.id });
    mutate('/api/admin/get-orders');
  };

  const decideNo = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    axios.post('/api/shop/return-order', { /* token */ itemId: item.id });
    mutate('/api/admin/get-orders');
  };

  return (
    <div className="decide">
      <Button className="decide__yes" onClick={decideYes}>
        Подтвердить
      </Button>
      <Button className="decide__no" variant="outline-primary" onClick={decideNo}>
        Вернуть
      </Button>
    </div>
  );
}
