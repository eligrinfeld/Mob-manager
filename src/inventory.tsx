import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from 'react-admin';

export const InventoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="quantity" />
      <TextField source="category" />
      <NumberField source="reorderLevel" />
      <NumberField source="costPrice" options={{ style: 'currency', currency: 'USD' }} />
      <NumberField source="sellingPrice" options={{ style: 'currency', currency: 'USD' }} />
    </Datagrid>
  </List>
);

export const InventoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="quantity" />
      <SelectInput source="category" choices={[
        { id: 'alcohol', name: 'Alcohol' },
        { id: 'mixers', name: 'Mixers' },
        { id: 'equipment', name: 'Equipment' },
        { id: 'merchandise', name: 'Merchandise' },
      ]} />
      <NumberInput source="reorderLevel" />
      <TextInput source="supplier" />
      <NumberInput source="costPrice" />
      <NumberInput source="sellingPrice" />
    </SimpleForm>
  </Edit>
);

export const InventoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="quantity" />
      <SelectInput source="category" choices={[
        { id: 'alcohol', name: 'Alcohol' },
        { id: 'mixers', name: 'Mixers' },
        { id: 'equipment', name: 'Equipment' },
        { id: 'merchandise', name: 'Merchandise' },
      ]} />
      <NumberInput source="reorderLevel" />
      <TextInput source="supplier" />
      <NumberInput source="costPrice" />
      <NumberInput source="sellingPrice" />
    </SimpleForm>
  </Create>
);