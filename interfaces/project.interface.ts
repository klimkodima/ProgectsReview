export enum EProjectType {
  Design = 'Проектирование',
  Tender = 'Тендер',
  Sale = 'Продажа',
  Сonstruction = 'Строительство',
  Support = 'Сервис'
}

export enum EProjectStatus {
  Active = 'Активный',
  Fulfiled = 'Выполнен',
  Submit = 'Подан',
  Problem = 'Просрочен'
}

export enum ETeam {
  Electric = 'КС-Э',
  AsyTP = 'АСУ',
  Local = 'КС-Л',
  Cooling = 'КОНД',
  ElectricINF = 'ИИ',
  Auduo = 'АВС',
  Network = 'СР',
  Computing = 'Выч. техника',
  Support = 'СО',
  Sale = 'Менеджеры',
  Security = 'ИСБ',
  Сonstruction = 'Общестрой',
  Logistic = 'Логистика',
  Build = 'Служба ГИ',
  Programming = 'ПО',
  Сalculation = 'Сметный отдел',
  Сontract = 'Договорной отдел',
  Gip = 'Гипы'
}

export interface IProjectModel {
  id: number;
  name: string;
  type: EProjectType;
  createdAt: Date;
  manager: string;
  gip: string;
  start_date: Date;
  end_date: Date;
  status: EProjectStatus;
  closed: boolean;
  price: number;
  updatedAt: Date;
}

export interface IProjectModelwithTeams extends IProjectModel {
  teams: ETeam[];
}

export interface IProjectModelTable {
  id: number;
  name: string;
  type: EProjectType;
  createdAt: string;
  manager: string;
  gip: string;
  start_date: string;
  end_date: string;
  status: EProjectStatus;
  closed: boolean;
  price: number;
  updatedAt: string;
  teamsCount: number;
}
