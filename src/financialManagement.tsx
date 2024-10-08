import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, Show, SimpleShowLayout } from 'react-admin';

export const FinancialRecordList = () => (
  <List>
    <Datagrid rowClick="show">
      <DateField source="date" />
      <NumberField source="totalRevenue" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="barSales" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="ticketSales" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="promoterPayouts" options={{ style: 'currency', currency: 'USD' }} />
    </Datagrid>
  </List>
);

export const FinancialRecordShow = () => (
  <Show>
    <SimpleShowLayout>
      <DateField source="date" />
      <NumberField source="totalRevenue" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="barSales" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="ticketSales" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="vipPackageSales" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="promoterPayouts" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="operatingCosts" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="netProfit" options={{ style: 'currency', currency: 'USD' }} />
    </SimpleShowLayout>
  </Show>
);