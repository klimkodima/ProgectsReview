import { GetStaticProps } from 'next';
import { withLayout } from '.@/layout/Layout';
import { IProjectModelTable } from '../interfaces/project.interface';
import { projects } from './makeData';

function Statictics({ data }: HomeProps): JSX.Element {
  return <span>Statictics</span>;
}

export default withLayout(Statictics);

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      data: projects
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  data: IProjectModelTable[];
}
