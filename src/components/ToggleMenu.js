export const ToggleMenu = ({ toggle }) => {
  return (
    <a
      href="#"
      className="toggle-button"
      onClick={() => {
        toggle();
      }}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
  );
};
