import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, ReferenceField, Edit, Create, SimpleForm, TextInput, DateTimeInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

export const TransactionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="event_id" reference="events"><TextField source="name" /></ReferenceField>
      <ReferenceField source="customer_id" reference="customers"><TextField source="name" /></ReferenceField>
      <NumberField source="amount" />
      <DateField source="transaction_date" showTime />
      <TextField source="type" />
    </Datagrid>
  </List>
);

export const TransactionEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="customer_id" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
      <NumberInput source="amount" />
      <DateTimeInput source="transaction_date" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);

export const TransactionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="customer_id" reference="customers"><SelectInput optionText="name" /></ReferenceInput>
      <NumberInput source="amount" />
      <DateTimeInput source="transaction_date" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);