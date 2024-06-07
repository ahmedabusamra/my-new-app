'use client';
import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';
import { emailSort, nameSort } from './services';

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  params: { id: number };
  searchParams: { order: string};
}
const Users =  async (  {searchParams: { order } }: Props,
 ) => { 
  
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  let userList: User[] = await response.json();

  
  if ( order == "Email"){
    userList = sort(userList).asc(
      user => user.email
    );
  }else if ( order == "Name") {
    userList = sort(userList).asc(
      user => user.name
    );
  }


  return (
    <div>
    <div className="collapse-title text-xl font-medium">Users Page</div>
    <hr />
    <div className="collapse-title text-xl font-medium"> Sorted by {order}</div>
    <hr />
    <table className='table'>
      <thead>
        <tr className=''>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th className='' > <Link href={"/users?order=Name"}> Name</Link></th>
         <th className=''><Link href={"/users?order=Email"}>Email</Link></th>
        </tr>
      </thead>
      <tbody>
        { 
        
        userList.map((user) => (
          <tr className='hover' key={user.id}>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => {
                    console.log('checked', e.target.checked);
                  }}
                />
              </label>
            </th>
            <td className=''>{user.name}</td>
            <td className=''>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  </div>
  );
};


export default Users;
