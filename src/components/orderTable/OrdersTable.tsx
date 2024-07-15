import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { FaFilter } from 'react-icons/fa';
import './ordersTable.scss';

const data = [
  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },
  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },  {
    id: '1',
    productName: 'Lathe Machine',
    pd: new Date('2024-06-01'),
    amount: '$130,000',
  },
  // ...other rows
];

const COLUMNS = [
  { label: 'Product Name', renderCell: (item: any) => item.productName },
  {
    label: 'PD',
    renderCell: (item: any) =>
      item.pd.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  { label: 'Amount', renderCell: (item: any) => item.amount },
];

const OrdersTable: React.FC = () => {
  return (
    <div className="ordersTable">
      <div className="header">
        <h2>Orders</h2>
        <FaFilter className="filter-icon" />
      </div>
      <CompactTable columns={COLUMNS} data={{ nodes: data }} />
    </div>
  );
};

export default OrdersTable;
