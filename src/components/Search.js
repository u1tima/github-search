import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Search = () => {

  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Make req with: ', value);
    } else {
      show('Enter user data!')
    }
  }

  return (
    <div className='form-group'>
      <input
        type="text"
        value={value}
        className='form-control'
        placeholder="Введите ник пользователя"
        onKeyPress={onSubmit}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
