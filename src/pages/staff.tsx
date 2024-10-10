import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  EmailField,
} from 'react-admin';

export const StaffList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="role" />
      <EmailField source="email" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);

export const StaffEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="role" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);

export const StaffCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="role" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Create>
);