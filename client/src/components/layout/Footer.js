import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Hacker<span className="footer_link" role="img">🔗</span>Link
    </footer>
  );
};
