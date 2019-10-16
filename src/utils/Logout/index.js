import * as auth from '../';

const handleLogout = (e) => {
  auth.logout();
  window.location.href = '/'
}

export default handleLogout;
