import { GetStaticProps } from 'next';
import { withLayout } from '.@/layout/Layout';
import { IProjectModelTable } from '../interfaces/project.interface';
import { projects } from './makeData';

function Teams({ data }: HomeProps): JSX.Element {
  return <span>Teams</span>;
}

export default withLayout(Teams);

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
