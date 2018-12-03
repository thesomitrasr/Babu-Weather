import React from 'react';
const Form = (props) => {
  return (
    <div>
      <form id="create-form" onSubmit={props.great}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button className="button">Get Weather</button>
      
      </form>
      
      </div>
  )
}
export default Form;