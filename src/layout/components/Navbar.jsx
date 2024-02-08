const Navbar = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
  return (
    <nav className='navbar'>
      <a href='#' className='logo'></a>
      <ul className='nav-links'>
        <li className='search'>
          <input type='text' placeholder='Rechercher' />
          <button>
            <i className='fas fa-search'></i>
          </button>
          </li>

          <li>
            <a href='#accueil'>Accueil</a>
          </li>
          <li>
            <a href='#a-propos'>À propos</a>
          </li>
        <li className='language'>
        <select>
          <option value='fr'>Français</option>
          <option value='en'>English</option>
          <option value='es'>Español</option>
        </select>
        </li>
        <li className='date'>
          <span id='current-date'>{currentDate}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
