import moment from 'moment';
import Decide from './Decide';
import Status from './Status';

export default function TableRow({ section, id, name, ammount, status, storeNumber, price, createdAt }) {
    return (
    <>
      <tr className="table-row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{ammount}</td>
        <td>{storeNumber}</td>
        <td>{moment(createdAt).format('YYYY-MM-DD, h:mm a') }</td>
        <td>${price}</td>
        {section === 'Доступные' && <th>{status === 'В процессе' && <Decide id = {id}/>}</th>}
        {!['История', 'Доступные'].includes(section) && <td className="table-row__status">{<Status status={status}/>}</td>}
      </tr>
    </>
  );
}
