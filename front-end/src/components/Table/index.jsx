import { useContext } from 'react';
import Context from '../../context/Context';
import dots from '../../assets/pontosVerticais.png';
import './style.css';

function Table() {
  const { users } = useContext(Context);

  return (
    <table className="table">
      {users.length !== 0 && (
        <thead className="table-thead">
          <tr>
            <th className="th-id">ID</th>
            <th className="th-name">Nome</th>
            <th className="th-email">E-mail</th>
            <th className="th-cpf">CPF</th>
            <th className="th-actions">Ações</th>
          </tr>
        </thead>
      )}
      <tbody>
        {users
          && users.map((current, index) => (
            <tr key={ index }>
              <td data-label="ID">{current.id}</td>
              <td data-label="Nome">{current.fullName}</td>
              <td data-label="E-mail">{current.email}</td>
              <td data-label="cpf">{current.cpf}</td>
              <td>
                <button
                  className="btn-actions"
                  type="button"
                  // onClick={ () => handleDelete(current.id) }
                >
                  <img src={ dots } height={ 11 } alt="Ações" />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
