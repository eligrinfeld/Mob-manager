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
      <ReferenceField source="event_id" reference="events"><TextField source="name" /></ReferenceField>
      <ReferenceField source="customer_id" reference="customers"><TextField source="name" /></ReferenceField>
      <DateField source="booking_date" showTime />
      <NumberField source="number_of_guests" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const BookingEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="customer_id" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
      <DateTimeInput source="booking_date" />
      <NumberInput source="number_of_guests" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const BookingCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="customer_id" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
      <DateTimeInput source="booking_date" />
      <NumberInput source="number_of_guests" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);