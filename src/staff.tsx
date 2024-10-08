import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from 'react-admin';

export const StaffList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="position" />
      <TextField source="phone" />
      <NumberField source="performanceRating" />
    </Datagrid>
  </List>
);

export const StaffEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <SelectInput source="position" choices={[
        { id: 'bartender', name: 'Bartender' },
        { id: 'security', name: 'Security' },
        { id: 'dj', name: 'DJ' },
        { id: 'waiter', name: 'Waiter' },
        { id: 'manager', name: 'Manager' },
      ]} />
      <TextInput source="phone" />
      <NumberInput source="performanceRating" min={0} max={5} />
      <DateTimeInput source="nextShift" />
    </SimpleForm>
  </Edit>
);

export const StaffCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <SelectInput source="position" choices={[
        { id: 'bartender', name: 'Bartender' },
        { id: 'security', name: 'Security' },
        { id: 'dj', name: 'DJ' },
        { id: 'waiter', name: 'Waiter' },
        { id: 'manager', name: 'Manager' },
      ]} />
      <TextInput source="phone" />
      <NumberInput source="performanceRating" min={0} max={5} />
      <DateTimeInput source="nextShift" />
    </SimpleForm>
  </Create>
);