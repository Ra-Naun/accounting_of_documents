import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';

export default function Decide({ id }) {
  const { mutate } = useSWRConfig();

  const takeOrder = () => {
    // сообщить всем SWR с этим ключём, чтобы они ревалидировали
    try {
        axios.post('/api/delivery/take-order', { /* token */ itemId: id });
        mutate('/api/delivery/get-orders');
        toast.success('Статус заказа обновлен успешно');
    } catch {
        toast.error('Что-то пошло не так. Нет возможности обновить заказ');
    }
  };

  return (
    <div className="decide">
      <Button className="decide__yes" onClick={takeOrder}>
        Принять
      </Button>
    </div>
  );
}
