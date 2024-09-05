import { StoryObj, Meta } from '@storybook/react';

import { Table } from '..';
import { TableProps } from '../types';
import { columnFields, rowData } from '../mock/tableData';


const meta: Meta<TableProps> = {
  title: 'Container/Table',
  component: Table,
  args: {
    columnFields,
    rowData,
  },
};
export default meta;

export const TableStory: StoryObj<TableProps> = {
  render: ({ columnFields, rowData }) => (
    <div className="tableDemo">
      <center><h1>Table Component Demo</h1></center>
      <Table columnFields={columnFields} rowData={rowData} pageSize={10} />
    </div>
  ),
  name: 'Table',
};
