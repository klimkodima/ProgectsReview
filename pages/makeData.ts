import { faker } from '@faker-js/faker/locale/ru';
import {
  IProjectModelTable,
  EProjectType,
  EProjectStatus
} from '../interfaces/project.interface';

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
      EProjectStatus.Problem,
      EProjectStatus.Сlosed,
      EProjectStatus.Problem,
      EProjectStatus.Submit
    ]),
    price: +faker.commerce.price(1000, 1000000),
    updatedAt: faker.date.recent(1).toLocaleDateString(),
    teamsCount: faker.datatype.number(8)
  };
};

Array.from({ length: 100 }).forEach(() => {
  projects.push(createRandomUser());
});
