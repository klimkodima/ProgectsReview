import { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { ColumnDef } from '@tanstack/react-table';

export interface TableProps<T extends object>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: T[];
  columns: ColumnDef<T>[];
  showPagination?: boolean;
  showGlobalFilter?: boolean;
}
