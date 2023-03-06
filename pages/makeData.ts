import { faker } from '@faker-js/faker/locale/ru';
import {
  IProjectModelTable,
  EProjectType,
  EProjectStatus
} from '../interfaces/project.interface';
import { StatisticCircleDataType } from '../pageElements/ProjectsActivitiesPercentage/types';

export const projects: IProjectModelTable[] = [];
const createRandomUser = (): IProjectModelTable => {
  return {
    id: faker.datatype.number(),
    name: faker.company.companyName(),
    type: faker.helpers.arrayElement<EProjectType>([
      EProjectType.Design,
      EProjectType.Tender,
      EProjectType.Sale,
      EProjectType.Сonstruction,
      EProjectType.Support
    ]),
    createdAt: faker.date.recent(5).toLocaleDateString(),
    manager: faker.name.fullName(),
    gip: faker.name.fullName(),
    start_date: faker.date.recent(4).toLocaleDateString(),
    end_date: faker.date.future(0.03).toLocaleDateString(),
    status: faker.helpers.arrayElement<EProjectStatus>([
      EProjectStatus.Active,
      EProjectStatus.Fulfiled,
      EProjectStatus.Problem,
      EProjectStatus.Submit
    ]),
    price: +faker.commerce.price(1000, 1000000),
    updatedAt: faker.date.recent(1).toLocaleDateString(),
    teamsCount: faker.datatype.number(8),
    closed: faker.datatype.boolean()
  };
};

Array.from({ length: 100 }).forEach(() => {
  projects.push(createRandomUser());
});

export const projectsStatistics: StatisticCircleDataType[] = [
  {
    name: '',
    labels: [
      {
        name: 'Audits',
        percentage: 39.8936170212766
      },
      {
        name: 'Meetings',
        percentage: 24.73404255319149
      },
      {
        name: 'Others',
        percentage: 16.75531914893617
      },
      {
        name: 'Support',
        percentage: 18.617021276595743
      }
    ]
  },
  {
    teamName: 'X-Rays',
    labels: [
      {
        name: 'Audits',
        percentage: 39.8936170212766
      },
      {
        name: 'Meetings',
        percentage: 24.73404255319149
      },
      {
        name: 'Others',
        percentage: 16.75531914893617
      },
      {
        name: 'Support',
        percentage: 18.617021276595743
      }
    ]
  },
  {
    teamName: 'Alpha',
    labels: [
      {
        name: 'Audits',
        percentage: 39.8936170212766
      },
      {
        name: 'Meetings',
        percentage: 24.73404255319149
      },
      {
        name: 'Others',
        percentage: 16.75531914893617
      },
      {
        name: 'Support',
        percentage: 18.617021276595743
      }
    ]
  }
];
