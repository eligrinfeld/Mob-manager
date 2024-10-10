import React from 'react';
import { List, Datagrid, TextField, NumberField, ReferenceField, Edit, Create, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

export const InventoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="quantity" />
      <ReferenceField source="venue_id" reference="venues"><TextField source="name" /></ReferenceField>
    </Datagrid>
  </List>
);

export const InventoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="quantity" />
      <ReferenceInput source="venue_id" reference="venues"><SelectInput optionText="name" /></ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const InventoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="quantity" />
      <ReferenceInput source="venue_id" reference="venues"><SelectInput optionText="name" /></ReferenceInput>
    </SimpleForm>
  </Create>
);