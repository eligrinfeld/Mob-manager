import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from 'react-admin';

export const BookingList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="customerId" reference="customers">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="eventId" reference="events">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="bookingType" />
      <NumberField source="numberOfGuests" />
      <DateField source="bookingDate" showTime />
      <TextField source="paymentStatus" />
    </Datagrid>
  </List>
);

export const BookingEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="customerId" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput source="bookingType" choices={[
        { id: 'general', name: 'General Admission' },
        { id: 'vip_table', name: 'VIP Table' },
        { id: 'private_event', name: 'Private Event' },
      ]} />
      <NumberInput source="numberOfGuests" />
      <DateTimeInput source="bookingDate" />
      <TextInput source="specialRequests" multiline />
      <SelectInput source="paymentStatus" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'paid', name: 'Paid' },
        { id: 'refunded', name: 'Refunded' },
      ]} />
    </SimpleForm>
  </Edit>
);

export const BookingCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="customerId" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput source="bookingType" choices={[
        { id: 'general', name: 'General Admission' },
        { id: 'vip_table', name: 'VIP Table' },
        { id: 'private_event', name: 'Private Event' },
      ]} />
      <NumberInput source="numberOfGuests" />
      <DateTimeInput source="bookingDate" />
      <TextInput source="specialRequests" multiline />
      <SelectInput source="paymentStatus" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'paid', name: 'Paid' },
      ]} />
    </SimpleForm>
  </Create>
);