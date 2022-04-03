import { Button } from 'react-bootstrap';

export default function Status(props) {
  const { status } = props;

  const classNamesForStatus = {
    'В обработке': 'inProcessing',
    Отправлен: 'sent',
    Получен: 'received',
    Ожидает: 'await',
    Возвращается: 'returning',
    Возвращен: 'returned',
  };

  const verifedStatus = Object.keys(classNamesForStatus).includes(status) ? status : '';

  return (
    <Button className={`status ${classNamesForStatus[verifedStatus]}`} variant="info">
      {verifedStatus || 'Unknown status'}
    </Button>
  );
}
