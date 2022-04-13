import Form from './Form.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormV2 = ({list, updateList}) => {

  //APPLICATION STATE
  const [formData, setFormData] = useState({});


  // EVENT HANDLERS
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log("Posting data...");

   let newId = uuidv4(); 
   setFormData( {...formData, id: newId} );
   
   updateList( [...list, formData] );
  }

  const handleChangeField = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    let newValue = e.target.value;

    if (e.target.type === "checkbox") {
      newValue = e.target.checked;
    }
    
    let newFormData = {
      ...formData, 
      [e.target.name]: newValue
    };

    setFormData( newFormData );
  }


 
  //OTHER FUNCTIONS
  const clearForm = () => {
 

    document.getElementById('is-married').checked = false;
  }

  //RENDER
  const renderKidCountInput = () => {
    let kidCountInput = (
      <input 
        type="number" 
        placeholder='How many kids?' 
        name='kid-count'
        defaultValue={formData['kid-count'] ?? 0}
      />
    );

    let result;
    // if  (formData['has-kids'] ) {
    //   result = kidCountInput
    // } else {
    //   result = ''
    // }
    result = formData['has-kids'] ? kidCountInput : '';

    return result;
  }


  return (
    <form className="Form" onSubmit={handleSubmit} onChange={handleChangeField}>

      <div>
        <input 
          type="test"
          placeholder="First Name"
          name="first-name"
          // value={firstName}
        />
      </div>

      <div>
        <input 
          type="test"
          placeholder="Last Name"
          name="last-name"
          // value={lastName}
        />
      </div>

      <div>
        <input 
          type="tel"
          placeholder="Phone Number"
          name="phone-number"
          // value={phoneNumber}
        />
      </div>

      <div>
        <input 
          type="email"
          placeholder="Email Address"
          name="email"
          // onChange={handleChangeEmail}
          // value={email}
        />
      </div>

      <div>
        <input 
          type="number"
          placeholder="Age"
          name="age"
          // value={age}
        />
      </div>

      <div>
        <label htmlFor="is-married">Is Married</label>
        <input 
          id="is-married"
          type="checkbox"
          name="is-married"
          // value={isMarried}
        />
      </div>

      <div>
        <label htmlFor="has-kids">Has Kids</label>
        <input 
          id="has-kids"
          type="checkbox"
          name="has-kids"
          // value={hasKids}
        />
      </div>

      { renderKidCountInput() }


      <div>
        <button type="submit">Submit</button>
      </div>

    </form>
  )

}

export default FormV2;