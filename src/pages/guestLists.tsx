import React from 'react';
import { List, Datagrid, TextField, NumberField, ReferenceField, Edit, Create, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';

export const GuestListList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="event_id" reference="events"><TextField source="name" /></ReferenceField>
      <ReferenceField source="promoter_id" reference="promoters"><TextField source="name" /></ReferenceField>
      <TextField source="name" />
      <NumberField source="size" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const GuestListEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="promoter_id" reference="promoters"><SelectInput optionText="name" /></ReferenceInput>
      <TextInput source="name" />
      <NumberInput source="size" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const GuestListCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="event_id" reference="events"><SelectInput optionText="name" /></ReferenceInput>
      <ReferenceInput source="promoter_id" reference="promoters"><SelectInput optionText="name" /></ReferenceInput>
      <TextInput source="name" />
      <NumberInput source="size" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);