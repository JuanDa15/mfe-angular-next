import { useEffect, useState } from 'react';
import { getUsers } from '@/services/user';
import { type UserList } from '@/interfaces/user';
import { SearchBar } from './SearchBar';
import { GithubIcon } from './icons/GithubIcon';
import { Button } from './ui/Button';
import { Spinner } from './ui/Spinner';
import { useStore } from '@/store';

export function UserList() {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const setSelectedUser = useStore((state) => state.setSelectedUser);

  const search = (username: string) => {
    setLoading(true);
    getUsers(username)
      .then((data) => {
        if (data.items) {
          setUsers(data.items);
        }
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        window.alert(
          `${error.status} - ${error.error.message}` || 'Ha ocurrido un error'
        );
      });
  };

  const handleUserClick = (user: UserList) => {
    setSelectedUser(user);
    window.location.href = '/usuario/' + user.login;
  };

  return (
    <div>
      <h1 className='text-4xl mt-4 font-semibold text-secondary-text/40'>
        Buscador de usuarios de Github
      </h1>
      <hr className='my-4' />
      <SearchBar className='my-4' onSearch={search} />

      {loading && <Spinner />}

      {users.length === 0 && !loading && (
        <p
          className='bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative'
          role='alert'
        >
          No hay usuarios. Por favor, realiza una búsqueda.
        </p>
      )}

      {users.length > 0 && !loading && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {' '}
          {users.map((user) => (
            <li
              key={user.id}
              className='bg-secondary-background p-2 rounded-xl border-boder-color border flex flex-row gap-2 items-center'
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width={64}
                height={64}
                className='rounded-full shadow-sm shadow-boder-color aspect-square w-16 h-16'
              />
              <div className='flex flex-col gap-1 w-full'>
                <h2 className='text-base font-medium text-secondary-text opacity-80'>
                  {user.login}
                </h2>
                <div className='flex flex-row justify-end gap-2'>
                  <Button
                    type='button'
                    btnStyle='icon'
                    className='text-accent bg-primary-background shadow-sm rounded-full'
                    onClick={() => handleUserClick(user)}
                  >
                    <GithubIcon />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
