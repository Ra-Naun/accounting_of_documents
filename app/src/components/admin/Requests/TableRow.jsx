import Decide from './Decide';

export default function TableRow(props) {
  const { user, count } = props;
  const { firstName, lastName, role, id } = user;
  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{role}</td>
        <th><Decide userId = {id}/></th>
      </tr>
    </>
  );
}
