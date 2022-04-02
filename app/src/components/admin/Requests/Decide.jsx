import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="decide">
      <Button className="decide__yes">
        Одобрить
      </Button>
      <Button className="decide__no" variant="outline-primary">
        Отклонить
      </Button>
    </div>
  );
}
