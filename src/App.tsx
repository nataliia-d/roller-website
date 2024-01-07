import { FC, useEffect } from 'react';
import { useState } from 'react';
import Modal from './components/IntroModal';
import './styles/style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div id="main">
        <div id="header">
          <h1>Hello!</h1>
        </div>
        <div id="body">
          <p>Start editing to see some magic happen :)</p>
          {/* Additional content here */}
        </div>
        <div id="footer">
          <p>Footer Content</p>
        </div>
      </div>
    </div>
  );
};
