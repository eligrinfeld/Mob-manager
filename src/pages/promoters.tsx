import React from 'react';
import { List, Datagrid, TextField, NumberField, Edit, Create, SimpleForm, TextInput, NumberInput, EmailField } from 'react-admin';

export const PromoterList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <NumberField source="commission_rate" />
    </Datagrid>
  </List>
);

export const PromoterEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
      <NumberInput source="commission_rate" />
    </SimpleForm>
  </Edit>
);

export const PromoterCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phone" />
      <NumberInput source="commission_rate" />
    </SimpleForm>
  </Create>
);