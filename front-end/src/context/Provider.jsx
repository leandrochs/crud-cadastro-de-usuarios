import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

export function Provider({ children }) {
  const [users, setUsers] = useState([]);

  const context = useMemo(
    () => ({
      users,
      setUsers,
    }),
    [users],
  );

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
