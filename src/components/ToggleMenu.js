export const ToggleMenu = ({ toggle }) => {
  return (
    <button
      href="#"
      className="toggle-button"
      onClick={() => {
        toggle();
      }}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};
