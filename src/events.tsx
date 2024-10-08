import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="date" showTime />
      <TextField source="location" />
      <NumberField source="capacity" />
      <NumberField source="freeEntryLimit" />
      <NumberField source="coverCharge" />
    </Datagrid>
  </List>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="date" />
      <TextInput source="location" />
      <NumberInput source="capacity" />
      <NumberInput source="freeEntryLimit" />
      <NumberInput source="coverCharge" />
      <ReferenceInput source="venueId" reference="venues">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="date" />
      <TextInput source="location" />
      <NumberInput source="capacity" />
      <NumberInput source="freeEntryLimit" />
      <NumberInput source="coverCharge" />
      <ReferenceInput source="venueId" reference="venues">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);