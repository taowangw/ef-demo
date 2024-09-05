import './App.css';
import { Table } from './components/Table';
import { ColumnProps, RowProps } from './components/Table/types';

function App() {

  const columnFields: ColumnProps[] = [
    { field: 'name', label: 'Name', fixed: 'left' },
    { field: 'english', label: 'English' },
    { field: 'chinese', label: 'Chinese' },
    { field: 'french', label: 'French' },
    { field: 'dutch', label: 'Dutch' },
    { field: 'russia', label: 'Russia' },
    { field: 'japanese', label: 'Japanese' },
    { field: 'average', label: 'Average', fixed: 'right' },
    { field: 'total', label: 'Total', fixed: 'right' },
    { field: 'date', label: 'Date' },
  ];
  
  const rowData: RowProps[] = [
    {
      name: 'Jim',
      english: 115,
      chinese: 126,
      french: 117,
      dutch: 112,
      russia: 120,
      japanese: 107,
      average: 118,
      total: 666,
      date: '2024-09-02',
    },
    {
      name: 'Andy',
      english: 115,
      chinese: 106,
      french: 103,
      dutch: 92,
      russia: 100,
      japanese: 117,
      average: 108,
      total: 606,
      date: '2024-09-02',
    },
    {
      name: 'Cindy',
      english: 105,
      chinese: 106,
      french: 87,
      dutch: 52,
      russia: 50,
      japanese: 87,
      average: 88,
      total: 566,
      date: '2024-09-02',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src='./logo.svg' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="tableDemo">
      <h1>Table Component Demo</h1>
      <Table columnFields={columnFields} rowData={rowData} pageSize={10} />
    </div>
      </header>
    </div>
  );
}

export default App;
