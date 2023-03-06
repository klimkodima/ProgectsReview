import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IProjectModelTable } from '../../interfaces/project.interface';
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';
import { ProjectsProps } from './Projects.props';

const Projects = ({ data }: ProjectsProps): JSX.Element => {
  const columns = useMemo<ColumnDef<IProjectModelTable, any>[]>(
    () => [
      {
        header: 'Проект',
        accessorKey: 'name'
      },
      {
        header: 'Тип',
        accessorKey: 'type'
      },
      {
        header: 'Дата открытия',
        accessorKey: 'createdAt'
      },
      {
        header: 'Менеджер',
        accessorKey: 'manager'
      },
      {
        header: 'Гип',
        accessorKey: 'gip'
      },
      {
        header: 'Дата старта',
        accessorKey: 'start_date'
      },
      {
        header: 'Дата завершения',
        accessorKey: 'end_date'
      },
      {
        header: 'Статус',
        accessorKey: 'status'
      },
      {
        header: 'Сумма',
        accessorKey: 'price'
      },
      {
        header: 'Дата обновления',
        accessorKey: 'updatedAt'
      },
      {
        header: 'Количество команд',
        accessorKey: 'teamsCount'
      },
      {
        id: 'Закрыть проект',
        cell: () => (
          <Button
            className='text-gray-900 bg-gray-100 border border-gray-300
            focus:outline-none hover:bg-gray-200 font-medium rounded-2xl
            text-sm px-3 py-1 mr-2 mb-2'
          >
            Закрыть проект
          </Button>
        )
      }
    ],
    []
  );

  return (
    <>
      <Table columns={columns} data={data} showGlobalFilter />
      <div className='p-7 bg-current bg-sky-500/75'>
        <Button
          className='text-gray-900  border border-gray-300
        focus:outline-none hover:bg-gray-100 font-medium rounded-2xl
        text-sm px-5 py-2.5'
        >
          Создать проект
        </Button>
      </div>
    </>
  );
};

export default Projects;
