import React, { useState, useEffect } from 'react';

const Typewriter = ({ roles, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800 }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset immediately when language changes
  useEffect(() => {
    setText('');
    setRoleIndex(0);
    setIsDeleting(false);
  }, [roles]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timer = setTimeout(() => {}, 400);
      } else {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentRole) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

  return <span className="typing-role">{text}</span>;
};

export default Typewriter;
