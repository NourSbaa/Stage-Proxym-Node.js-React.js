import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <input type='checkbox' id='check' />
      <label htmlFor='check'>
        <i className='fas fa-bars' id='btn'></i>
        <i className='fas fa-times' id='cancel'></i>
      </label>
      <div className='sidebar'>
        <header>Menu</header>
        <ul>
          <li>
            <Link to='group'>
              <i className='fas fa-qrcode'></i>Group
            </Link>
          </li>
          <li>
            <Link to='company'>
              <i className='fas fa-qrcode'></i>Company
            </Link>
          </li>
          <li>
            <Link to='user'>
              <i className='fas fa-qrcode'></i>User
            </Link>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-stream'></i>Aperçu
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-sliders-h'></i>Service
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='far fa-envelope'></i>Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
