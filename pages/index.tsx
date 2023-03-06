import { GetStaticProps } from 'next';
import { withLayout } from '.@/layout/Layout';
import { Projects } from '.@/layout/Projects';
import { IProjectModelTable } from '../interfaces/project.interface';
import { projects } from './makeData';

function Home({ data }: HomeProps): JSX.Element {
  return <Projects data={data} />;
}

export default withLayout(Home);

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
