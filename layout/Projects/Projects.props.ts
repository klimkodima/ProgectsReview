import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProjectModelTable } from '../../interfaces/project.interface';

export interface ProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IProjectModelTable[];
}
