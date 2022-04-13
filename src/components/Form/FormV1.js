import Form from './Form.css';
import { useState } from 'react';

const FormV1 = () => {

  //APPLICATION STATE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);



  const placeholder = () => {
    console.log('placeholder');
  }

  // EVENT HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !window.confirm("Are you sure?") ) {
      return;
    }

    const payload = {
      "first-name": firstName,
      "last-name": lastName,
      "phone-number": phoneNumber,
      "email": email,
      "age": age,
      "is-married": isMarried
    }
    console.log("submitting data...");
    console.log(payload);

    clearForm();
  }

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // }

  //OTHER FUNCTIONS
  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setAge(0);
    setIsMarried(false);

    document.getElementById('is-married').checked = false;
  }

  //RENDER
  return (
    <form className="Form" onSubmit={handleSubmit}>

      <div>
        <input 
          type="test"
          placeholder="First Name"
          name="first-name"
          onChange={handleChangeFirstName}
          value={firstName}
        />
      </div>

      <div>
        <input 
          type="test"
          placeholder="Last Name"
          name="last-name"
          onChange={handleChangeLastName}
          value={lastName}
        />
      </div>

      <div>
        <input 
          type="tel"
          placeholder="Phone Number"
          name="phone-number"
          onChange={handleChangePhoneNumber}
          value={phoneNumber}
        />
      </div>

      <div>
        <input 
          type="email"
          placeholder="Email Address"
          name="email"
          // onChange={handleChangeEmail}
          onChange={ (e) => setEmail(e.target.value) }
          value={email}
        />
      </div>

      <div>
        <input 
          type="number"
          placeholder="Age"
          name="age"
          onChange={ (e) => setAge(e.target.value) }
          value={age}
        />
      </div>

      <div>
        <label htmlFor="is-married">Is Married</label>
        <input 
          id="is-married"
          type="checkbox"
          name="is-married"
          onChange={ (e) => setIsMarried(e.target.checked) }
          value={isMarried}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

    </form>
  )

}

export default FormV1;