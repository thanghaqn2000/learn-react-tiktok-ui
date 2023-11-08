import HeaderUpload from './Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <HeaderUpload />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
