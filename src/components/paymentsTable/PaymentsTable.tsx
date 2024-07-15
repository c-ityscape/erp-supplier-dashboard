import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { FaFilter } from 'react-icons/fa';
import './paymentsTable.scss';

const data = [
  {
    id: '1',
    paymentDate: new Date('2024-06-01'),
    
    amount: '$130,000',
    balance: '$90,000',
  },
  {
    id: '1',
    paymentDate: new Date('2024-06-01'),
    
    amount: '$130,000',
    balance: '$90,000',
  },
  {
    id: '1',
    paymentDate: new Date('2024-06-01'),
    
    amount: '$130,000',
    balance: '$90,000',
  },
  {
    id: '1',
    paymentDate: new Date('2024-06-01'),
   
    amount: '$130,000',
    balance: '$90,000',
  },
  // ...other rows
];

const COLUMNS = [
  {
    label: 'Payment Date',
    renderCell: (item: any) =>
      item.paymentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  { label: 'Amount', renderCell: (item: any) => item.amount },
  { label: 'Balance', renderCell: (item: any) => item.balance },
];

const PaymentsTable: React.FC = () => {
  return (
    <div className="paymentsTable">
      <div className="header">
        <h2>Payments</h2>
        <FaFilter className="filter-icon" />
      </div>
      <CompactTable columns={COLUMNS} data={{ nodes: data }} />
    </div>
  );
};

export default PaymentsTable;
