import { useContext } from 'react';
import Context from '../../context/Context';

function Table() {
  const { users } = useContext(Context);

  return (

    <div>
      <h1>Table</h1>
      {
        JSON.stringify(users)
      }
    </div>
  );
}

export default Table;
