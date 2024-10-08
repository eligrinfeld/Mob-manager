import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const VIPBookingList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="eventId" reference="events">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="customerName" />
      <NumberField source="numberOfGuests" />
      <TextField source="packageName" />
      <NumberField source="price" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const VIPBookingEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="customerName" />
      <NumberInput source="numberOfGuests" />
      <TextInput source="packageName" />
      <NumberInput source="price" />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'confirmed', name: 'Confirmed' },
        { id: 'cancelled', name: 'Cancelled' },
      ]} />
    </SimpleForm>
  </Edit>
);

export const VIPBookingCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="customerName" />
      <NumberInput source="numberOfGuests" />
      <TextInput source="packageName" />
      <NumberInput source="price" />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'confirmed', name: 'Confirmed' },
        { id: 'cancelled', name: 'Cancelled' },
      ]} />
    </SimpleForm>
  </Create>
);