import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl mt-6 mb-4">Users</h1>
      {users.map((user: any) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersPage;
