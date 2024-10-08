import React from 'react';
import { List, Datagrid, TextField, NumberField, ReferenceField, Show, SimpleShowLayout } from 'react-admin';

export const PromoterPerformanceList = () => (
  <List>
    <Datagrid rowClick="show">
      <ReferenceField source="promoterId" reference="promoters">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="totalGuestsThisMonth" />
      <NumberField source="totalRevenueGenerated" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="averageGuestsPerEvent" />
    </Datagrid>
  </List>
);

export const PromoterPerformanceShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="promoterId" reference="promoters">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="totalGuestsThisMonth" />
      <NumberField source="totalRevenueGenerated" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="averageGuestsPerEvent" />
      <NumberField source="totalEventsWorked" />
      <NumberField source="totalEarnings" options={{ style: 'currency', currency: 'USD' }} />
      <TextField source="topPerformingEvent" />
    </SimpleShowLayout>
  </Show>
);