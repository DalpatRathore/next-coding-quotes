import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <div className="logo">
        <h1>Coding Quotes</h1>
      </div>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
