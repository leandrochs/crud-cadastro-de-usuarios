import ButtonNewUser from '../../components/ButtonNewUser';
import Search from '../../components/Search';
import Table from '../../components/Table';
import './style.css';

function Users() {
  return (
    <div className="users-container">
      <h1>Usuários cadastrados</h1>
      <div className="users-components">
        <ButtonNewUser />
        <div>
          <Search />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Users;
