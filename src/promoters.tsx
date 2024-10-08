import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from 'react-admin';

export const PromoterList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phoneNumber" />
      <TextField source="compensationType" />
    </Datagrid>
  </List>
);

export const PromoterEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phoneNumber" />
      <TextInput source="bio" multiline />
      <SelectInput source="compensationType" choices={[
        { id: 'commission', name: 'Commission' },
        { id: 'flatFee', name: 'Flat Fee' },
        { id: 'incentive', name: 'Incentive' },
      ]} />
      <NumberInput source="compensationValue" />
    </SimpleForm>
  </Edit>
);

export const PromoterCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <TextInput source="phoneNumber" />
      <TextInput source="bio" multiline />
      <SelectInput source="compensationType" choices={[
        { id: 'commission', name: 'Commission' },
        { id: 'flatFee', name: 'Flat Fee' },
        { id: 'incentive', name: 'Incentive' },
      ]} />
      <NumberInput source="compensationValue" />
    </SimpleForm>
  </Create>
);