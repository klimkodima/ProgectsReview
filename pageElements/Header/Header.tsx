import Image from 'next/image';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div
      {...props}
      className={`flex items-center justify-between px-4 ${styles.header}`}
    >
      <div className='flex'>
        <a href='#'>
          <Image
            src='images/general/logo.svg'
            alt='logo icon'
            width={170}
            height={70}
            className='logo-img'
            loading='eager'
            priority={true}
          />
        </a>
        <nav className='flex items-center'>
          <ul className='flex'>
            <li className='ml-10 hover:bg-cyan-600'>
              <a href='#' className='font-sans text-xl inline-block'>
                Проекты
              </a>
            </li>
            <li className='ml-10'>
              <a href='#' className='font-sans text-xl inline-block'>
                Отчеты
              </a>
            </li>
            <li className='ml-10'>
              <a
                href='#'
                className='font-sans text-xl inline-block focus:bg-indigo-100'
              >
                Команды
              </a>
            </li>
            <li className='ml-10'>
              <a href='#' className='font-sans text-xl inline-block'>
                Сотрудники
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a href='' className='inline-block'>
        <Image
          src='images/general/logout.svg'
          alt='log-out icon'
          className='logo-img'
          width={35}
          height={35}
          loading='eager'
          priority={true}
        />
      </a>
    </div>
  );
};

export default Header;
