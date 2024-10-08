import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const TransactionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="customerId" reference="customers">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="transactionType" />
      <NumberField source="amount" options={{ style: 'currency', currency: 'USD' }} />
      <DateField source="date" showTime />
      <TextField source="paymentMethod" />
      <ReferenceField source="staffId" reference="staff">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const TransactionEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="customerId" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput source="transactionType" choices={[
        { id: 'ticket_sale', name: 'Ticket Sale' },
        { id: 'bar_purchase', name: 'Bar Purchase' },
        { id: 'vip_service', name: 'VIP Service' },
      ]} />
      <NumberInput source="amount" />
      <DateTimeInput source="date" />
      <SelectInput source="paymentMethod" choices={[
        { id: 'cash', name: 'Cash' },
        { id: 'credit_card', name: 'Credit Card' },
        { id: 'debit_card', name: 'Debit Card' },
        { id: 'mobile_payment', name: 'Mobile Payment' },
      ]} />
      <ReferenceInput source="staffId" reference="staff">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const TransactionCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="customerId" reference="customers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput source="transactionType" choices={[
        { id: 'ticket_sale', name: 'Ticket Sale' },
        { id: 'bar_purchase', name: 'Bar Purchase' },
        { id: 'vip_service', name: 'VIP Service' },
      ]} />
      <NumberInput source="amount" />
      <DateTimeInput source="date" />
      <SelectInput source="paymentMethod" choices={[
        { id: 'cash', name: 'Cash' },
        { id: 'credit_card', name: 'Credit Card' },
        { id: 'debit_card', name: 'Debit Card' },
        { id: 'mobile_payment', name: 'Mobile Payment' },
      ]} />
      <ReferenceInput source="staffId" reference="staff">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventId" reference="events">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);