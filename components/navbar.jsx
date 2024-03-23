import Link from 'next/link';
import Image from 'next/image';

const links = [
  { link: '/client', name: 'Client' },
  { link: '/drinks', name: 'Drinks' },
  { link: '/prisma-example', name: 'Prisma' },
  { link: '/query', name: 'query' },
  { link: '/tasks', name: 'tasks' },
];

const Navbar = () => {
  return (
    <nav className="flex bg-slate-800">
      <div className="flex navbar px-4 flex-col max-w-2xl">
        <ul className="menu menu-horizontal flex items-center mx-auto">
          <li className="flex items-center">
            <Link href={'/'}>
              <Image alt="logo" height={40} width={40} src="/logo.png" />
            </Link>
          </li>
          {links.map((each, i) => (
            <li key={i}>
              <Link className="capitalize" href={each.link}>
                {each.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
