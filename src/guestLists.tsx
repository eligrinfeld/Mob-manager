import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from 'react-admin';

export const GuestListList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="eventId" reference="events">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="guestName" />
      <TextField source="status" />
      <DateField source="arrivalTime" showTime />
      <BooleanField source="isVIP" />
    </Datagrid>
  </List>
);

export const GuestListEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="guestName" />
      <SelectInput source="status" choices={[
        { id: 'confirmed', name: 'Confirmed' },
        { id: 'pending', name: 'Pending' },
        { id: 'cancelled', name: 'Cancelled' },
        { id: 'arrived', name: 'Arrived' },
      ]} />
      <DateTimeInput source="arrivalTime" />
      <BooleanInput source="isVIP" />
    </SimpleForm>
  </Edit>
);

export const GuestListCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="guestName" />
      <SelectInput source="status" choices={[
        { id: 'confirmed', name: 'Confirmed' },
        { id: 'pending', name: 'Pending' },
        { id: 'cancelled', name: 'Cancelled' },
      ]} />
      <BooleanInput source="isVIP" />
    </SimpleForm>
  </Create>
);