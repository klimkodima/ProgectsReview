import ProjectsActivitiesPercentage from './ProjectsActivitiesPercentage';
import { projectsStatistics } from '../../pages/makeData';

const ProjectsActivitiesPercentageContainer = (): JSX.Element => {
  return (
    <ProjectsActivitiesPercentage
      title='Общая статистика'
      circleData={projectsStatistics}
      placeholderText='placeholderText'
    />
  );
};

export default ProjectsActivitiesPercentageContainer;
