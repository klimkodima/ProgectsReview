import { FunctionComponent } from 'react';
import { Header } from '../pageElements/Header';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className='grid-cols-1 p-1'>
      <Header className='auto-rows-auto' />
      <div className='auto-rows-fr'>{children}</div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withlayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
