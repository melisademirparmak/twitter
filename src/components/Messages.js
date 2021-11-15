import React, { useState } from 'react';
import { FiMessageCircle } from '@react-icons/all-files/fi/FiMessageCircle';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown';
function Messages() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`message ${open && 'message__open'}`}>
      <h3>Messages</h3>
      <div className="message__icon">
        <FiMessageCircle className="message__iconMessage" />
        {open ? (
          <FiChevronDown onClick={() => setOpen(!open)} />
        ) : (
          <IoIosArrowUp onClick={() => setOpen(!open)} />
        )}
      </div>
    </div>
  );
}

export default Messages;
