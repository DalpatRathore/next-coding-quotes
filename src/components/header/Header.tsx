import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 px-10">
      <div className="logo">
        <h1>Coding Quotes</h1>
      </div>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
