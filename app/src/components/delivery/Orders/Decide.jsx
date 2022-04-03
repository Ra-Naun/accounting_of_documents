import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useSWRConfig } from 'swr';

export default function Decide({ id }) {
  const { mutate } = useSWRConfig();

  const takeOrder = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    axios.post('/api/delivery/take-order', { /* token */ itemId: id });
    mutate('/api/delivery/get-orders');
  };

  return (
    <div className="decide">
      <Button className="decide__yes" onClick={takeOrder}>
        Принять
      </Button>
    </div>
  );
}
