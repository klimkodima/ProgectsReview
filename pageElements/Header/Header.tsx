import Image from 'next/image';
import Link from 'next/link';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div
      {...props}
      className={`flex items-center justify-between px-4 ${styles.header}`}
    >
      <div className='flex'>
        <Link href='/' legacyBehavior>
          <Image
            src='images/general/logo.svg'
            alt='logo icon'
            width={170}
            height={70}
            className='logo-img'
            loading='eager'
            priority={true}
          />
        </Link>
        <nav className='flex items-center'>
          <ul className='flex'>
            <li className='ml-10 hover:bg-cyan-600'>
              <Link href='/' className='font-sans text-xl inline-block'>
                Проекты
              </Link>
            </li>
            <li className='ml-10'>
              <Link
                href='/statistics'
                className='font-sans text-xl inline-block'
              >
                Отчеты
              </Link>
            </li>
            <li className='ml-10'>
              <Link href='/teams' className='font-sans text-xl inline-block'>
                Команды
              </Link>
            </li>
            <li className='ml-10'>
              <Link href='/users' className='font-sans text-xl inline-block'>
                Сотрудники
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link href='/login' className='inline-block'>
        <Image
          src='images/general/logout.svg'
          alt='log-out icon'
          className='logo-img'
          width={35}
          height={35}
          loading='eager'
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Header;
