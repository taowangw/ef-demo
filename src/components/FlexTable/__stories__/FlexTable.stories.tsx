import { StoryObj, Meta } from '@storybook/react';

import { FlexTable, Cell, Row, Touchable } from '..';
import { TableProps } from '../types';

interface CustomArgs {
  heads: string[];
  rows: string[][];
}

const meta: Meta<TableProps & CustomArgs> = {
  title: 'Container/FlexTable',
  component: FlexTable,
  args: {
    heads: [],
    rows: [
      [
        'Subject Name',
        '2019 Q3',
        '2020 Q3',
        '2021 Q3',
        '2022 Q3',
        '2023 Q3',
        '2024 Q3',
      ],
      ['English', '104', '100', '98', '112', '101', '96'],
      ['Math', '120', '123', '99', '113', '114', '106'],
      //   [
      //     'Economy',
      //     '94',
      //     '90',
      //     '88',
      //     '82',
      //     '84',
      //     '76'
      //   ],
      //   [
      //     'Calligraphy',
      //     '94',
      //     '90',
      //     '78',
      //     '92',
      //     '94',
      //     '86'
      //   ],
      //   [
      //     'Geography',
      //     '54',
      //     '50',
      //     '58',
      //     '52',
      //     '54',
      //     '56'
      //   ],
      //   [
      //     'History',
      //     '55',
      //     '50',
      //     '57',
      //     '52',
      //     '54',
      //     '56'
      //   ],
      //   [
      //     'Chinese',
      //     '124',
      //     '120',
      //     '128',
      //     '122',
      //     '108',
      //     '99'
      //   ],
      //   [
      //     'Japanese',
      //     '94',
      //     '90',
      //     '88',
      //     '82',
      //     '84',
      //     '76'
      //   ],
      //   [
      //     'French',
      //     '90',
      //     '90',
      //     '88',
      //     '92',
      //     '84',
      //     '86'
      //   ],
      //   [
      //     'Dutch',
      //     '74',
      //     '70',
      //     '78',
      //     '72',
      //     '74',
      //     '76'
      //   ],
      //   [
      //     'Italy',
      //     '64',
      //     '60',
      //     '68',
      //     '62',
      //     '64',
      //     '66'
      //   ],
    ],
  },
};
export default meta;

export const TableStory: StoryObj<CustomArgs> = {
  render: ({ heads, rows }) => (
    <FlexTable flexDirection="column" inlineSize="800px" padding="32px">
      {rows.map((row, idx) => (
        <Row key={`row_${row}_${idx}`} highlighted={idx != 0 && idx % 2 === 0}>
          {row.map(cell => (
            <Cell
              key={`${cell}_${idx}`}
              padding="8px"
              text={cell}
              touchable={idx === 0}
              width={`${(100 / row.length).toFixed(2)}%`}
            />
          ))}
        </Row>
      ))}
    </FlexTable>
  ),
  name: 'FlexTable',
};
