import { useState } from "react";

export const ModalBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) <button onClick={() => setIsOpen(true)}> open </button>;
  return <div></div>;
};
