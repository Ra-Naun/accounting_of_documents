import Decide from './Decide';

export default function TableRow(props) {
  // const { firstname, lastname, role, } = props;
 const { data } = props;
 console.log('~| data', data);
  return (
    <>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Otto</td>
        <th><Decide/></th>
      </tr>
    </>
  );
}
