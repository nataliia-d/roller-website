import { FC, useEffect } from 'react';
import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/IntroModal';
import './styles/style.css';
import './styles/Buttons.css';


export const App: FC<{ name: string }> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('Button clicked!');
  }

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div id="main">
        <div id="header">
          <h1 className='hello'>Hello!</h1>
          <div id="button-menu">
            <Button label="Click Me" onClick={handleClick} className="btn1" />
            <Button label="Click Me" onClick={handleClick} className="btn2" />
            <Button label="Click Me" onClick={handleClick} className="btn3" />
          </div>
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
