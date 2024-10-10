import React from 'react';
import { List, Datagrid, TextField, Edit, Create, SimpleForm, TextInput, EmailField } from 'react-admin';

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);

export const CustomerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Create>
);