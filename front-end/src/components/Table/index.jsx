import React, { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Context from '../../context/Context';
import dots from '../../assets/pontosVerticais.png';
import './style.css';

function Table() {
  const { users } = useContext(Context);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div className="popover-container">
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <table className="table">
      {users.length !== 0 && (
        <thead className="table-thead">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Status</th>
            <th>Ações</th>
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
              <td data-label="cpf">{current.status}</td>
              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={ popover }
                >
                  <button
                    className="btn-actions"
                    type="button"
                    onClick={ () => console.log(index) }
                  >
                    <img src={ dots } height={ 11 } alt="Ações" />
                  </button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
