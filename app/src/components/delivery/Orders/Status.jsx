import { Button } from 'react-bootstrap';

export default function Status(props) {
  const { status } = props;

  const classNamesForStatus = {
    'В процессе': 'inProcessing',
    'Готово к доставке': 'sent',
    'Доставлено': 'received',
  };

  const verifedStatus = Object.keys(classNamesForStatus).includes(status) ? status : '';

  return (
    <Button className={`status ${classNamesForStatus[verifedStatus]}`} variant="info">
      {verifedStatus || 'Unknown status'}
    </Button>
  );
}
