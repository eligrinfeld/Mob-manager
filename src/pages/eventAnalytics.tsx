import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  Show,
  SimpleShowLayout,
  ReferenceField,
  useRecordContext,
} from 'react-admin';
import { Card, CardContent, Typography } from '@mui/material';

const EventAnalyticsList = () => (
  <List>
    <Datagrid rowClick="show">
      <ReferenceField source="eventId" reference="events">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="date" />
      <NumberField source="totalAttendees" />
      <NumberField source="revenue" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="barSales" options={{ style: 'currency', currency: 'USD' }} />
    </Datagrid>
  </List>
);

const EventAnalyticsShow = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Show>
      <SimpleShowLayout>
        <ReferenceField source="eventId" reference="events">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="date" />
        <NumberField source="totalAttendees" />
        <NumberField source="revenue" options={{ style: 'currency', currency: 'USD' }} />
        <NumberField source="barSales" options={{ style: 'currency', currency: 'USD' }} />
        <NumberField source="vipBookings" />
        <NumberField source="regularEntries" />
        <TextField source="peakAttendanceTime" />
        <Card>
          <CardContent>
            <Typography variant="h6">Performance Metrics</Typography>
            <Typography>Average Spend per Attendee: ${(record.revenue / record.totalAttendees).toFixed(2)}</Typography>
            <Typography>VIP Ratio: {((record.vipBookings / record.totalAttendees) * 100).toFixed(2)}%</Typography>
          </CardContent>
        </Card>
      </SimpleShowLayout>
    </Show>
  );
};

export { EventAnalyticsList, EventAnalyticsShow };