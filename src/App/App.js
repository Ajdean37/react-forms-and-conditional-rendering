// import FormV1 from '../components/Form/FormV1'
import { useState } from 'react';
import FormV2 from '../components/Form/FormV2'
import './App.css';
import PeopleList from '../components/PeopleList/PeopleList';

function App() {

  const [people, setPeople] = useState([]) // [{}]

  return (
    <div >
     <h1>Forms and Conditional Rendering</h1>
     {/* <FormV1 /> */}
     <FormV2 list={people} updateList={setPeople}  />
     <PeopleList data={people} />
    </div>
  );
}

export default App;
