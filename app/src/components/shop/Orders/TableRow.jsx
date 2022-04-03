import moment from 'moment';
import Decide from './Decide';
import Status from './Status';

export default function TableRow(props) {
  const { item, count: idx } = props;
  const { name, count, status, orderDate, cost, storageName } = item;
  return (
    <>
      <tr className="table-row">
        <td>{idx}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td className="table-row__status">{<Status status={status}/>}</td>
        <td>{moment(orderDate).format('YYYY-MM-DD, h:mm a') }</td>
        <td>${cost}</td>
        <td>{storageName}</td>
        <th>{status === 'Ожидает' && <Decide item = {item}/>}</th>
      </tr>
    </>
  );
}
