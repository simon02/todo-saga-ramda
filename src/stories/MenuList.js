import React, { useState, useCallback, useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const LIST_ITEM_CLASS = "box-content flex m-0 border-gray-700 border-b"
const ANCHOR_CLASS = "flex items-center box-content w-full text-white px-3 h-10 bg-gray-600 hover:bg-blue-700"

export default function MenuList({ menuItems, onAddNewItem }) {

  const AddNewItem = () => {
    const [showInput, setShowInput] = useState(false);

    const showInputCb = (e) => {
      e.preventDefault();
      setShowInput(true);
    }

    const IconEl = <BsPlusCircleFill />;
    const InputEl = () => {
      const [input, setInput] = useState('');

      const onKeyPress = useCallback((event) => {
        if (event.which === 13) {
          setShowInput(false);
        } else if (event.which === 27) {
          setShowInput(false);
        }
      });

      useEffect(() => {
        document.addEventListener('keydown', onKeyPress, false);

        return () => {
          document.removeEventListener('keydown', onKeyPress, false);
        }
      })

      const saveNewMenuItem = (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      }
      return (
        <input 
          className="flex flex-1 bg-transparent outline-none" 
          type="text" autoFocus placeholder="start typing, press enter to add" 
          onKeyPress={saveNewMenuItem}/>
      )
    }

    return (
      <li className={LIST_ITEM_CLASS}>
        <a href="#" className={ANCHOR_CLASS} onClick={showInputCb}>
          {showInput ? <InputEl /> : <BsPlusCircleFill />}
        </a>
      </li>
    )
  }

  const Menu = ({ title, count }) => {
    const CountEl = !count ? '' : (
      <span class="bg-blue-600 px-2 text-xs rounded-md text-gray-300 font-semibold border-blue-700 border">{count}</span>
    )

    return (
      <li className={LIST_ITEM_CLASS}>
        <a href="#" className={ANCHOR_CLASS}>
          <span className="flex-1">{title}</span>
          {CountEl}
        </a>
      </li>
    )
  }

  return (
    <ul className="flex flex-col p-0 text-white">
      {menuItems.map(menuItem => (
        <Menu key={menuItem.title} {...menuItem} />
      ))}
      {onAddNewItem ? <AddNewItem /> : 'adf'}
    </ul>
  )
}