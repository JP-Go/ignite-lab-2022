import Logo from './Logo';

export default function Header() {
  return (
    <header
      className={
        'flex justify-center items-center py-5 w-full bg-gray-700 border-b border-gray-600'
      }
    >
      <Logo />
    </header>
  );
}
