import React from 'react';
import { Company } from './App';

function ProfileMenu(props: { company: Company, currentlySelected: string}) {
  return (
    <button type='button' className='flex px-px'>
      <div className='flex flex-col text-right p-px'>
        <span className='text-sm font-extrabold leading-tight'>
          {props.company.user}
        </span>
        <span className='text-sm text-gray-500 leading-snug'>
          {props.currentlySelected}
        </span>
      </div>
      <div className='flex items-center pl-3 pr-2 h-full'>
        <i className='icon-20 icon__cog bg-gray-900'></i>
      </div>
    </button>
  )
}

export default ProfileMenu;
