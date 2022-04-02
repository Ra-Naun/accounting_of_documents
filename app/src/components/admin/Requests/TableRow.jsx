import Decide from './Decide';

export default function TableRow(props) {
  const { user, count } = props;
  const { name, secondName, role } = user;
  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{name}</td>
        <td>{secondName}</td>
        <td>{role}</td>
        <th><Decide user = {user}/></th>
      </tr>
    </>
  );
}
