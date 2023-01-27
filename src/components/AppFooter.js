import React from 'react';

function AppFooter() {
  return (
    <div className='appfooter-copyright'>
      <p>Copyright &copy; <span>Mahasiswa KKN Unila Periode I 2023</span>. All Rights Reserved</p>
      <p className="appfooter-copyright-designed">
        Designed by
        {' '}
        <span>KKN Campang Jaya</span>
      </p>
    </div>
  );
}

export default AppFooter;