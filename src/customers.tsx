import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  DateField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  DateInput,
  NumberInput,
} from 'react-admin';

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <BooleanField source="isVIP" />
      <DateField source="dateOfBirth" />
      <NumberField source="visitCount" />
    </Datagrid>
  </List>
);

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
      <BooleanInput source="isVIP" />
      <DateInput source="dateOfBirth" />
      <TextInput source="preferences" multiline />
      <NumberInput source="visitCount" disabled />
    </SimpleForm>
  </Edit>
);

export const CustomerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
      <BooleanInput source="isVIP" />
      <DateInput source="dateOfBirth" />
      <TextInput source="preferences" multiline />
    </SimpleForm>
  </Create>
);