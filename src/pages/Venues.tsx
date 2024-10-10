import React from 'react';
import { List, Datagrid, TextField, NumberField, Edit, Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const VenueList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <NumberField source="capacity" />
    </Datagrid>
  </List>
);

export const VenueEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <NumberInput source="capacity" />
    </SimpleForm>
  </Edit>
);

export const VenueCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <NumberInput source="capacity" />
    </SimpleForm>
  </Create>
);