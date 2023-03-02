import { withLayout } from '.@/layout/Layout';
import { Header } from '.@/layout/Header';

function Home(): JSX.Element {
  return <Header />;
}

export default withLayout(Home);
