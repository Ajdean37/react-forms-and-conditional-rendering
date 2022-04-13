import './PeopleList.css'

const PeopleList = ( {data} ) => {

  let checkedBox = <input type="checkbox" checked />
  let notCheckedBox = <input type="checkbox" />


  console.log(data);
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Age</th>
        <th>Married</th>
        <th>Has Kids</th>
        <th>Kid Count</th>
      </tr>
      {
        // data.map(item => (
        //   <li key={item.id}>{item['first-name']} {item['last-name']}</li>
        // ))
        data.map( item => (
          <tr key={item.id}>
            <td>{`${item['first-name']} ${item['last-name']}`}</td>
            <td>{item['phone-number']}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item['is-married'] ? checkedBox : notCheckedBox}</td>
            <td>{item['has-kids'] ? checkedBox : notCheckedBox}</td>
            <td>{item['kid-count'] ?? "0" }</td>
          </tr>
          
        ))
      }
    </table>
  );
}

export default PeopleList