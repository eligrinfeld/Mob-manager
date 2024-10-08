import React from 'react';
import { 
  SimpleForm, 
  TextInput, 
  PasswordInput, 
  SelectInput, 
  BooleanInput, 
  NumberInput,
  SaveButton,
  Toolbar,
  useNotify,
  useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography } from '@mui/material';

const SettingsToolbar = () => (
  <Toolbar>
    <SaveButton />
  </Toolbar>
);

export const Settings = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSave = async (values: any) => {
    // Here you would typically send the values to your API
    console.log(values);
    
    // For now, we'll just show a notification and redirect to the dashboard
    notify('Settings saved successfully', { type: 'success' });
    redirect('/');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Settings</Typography>
        <SimpleForm toolbar={<SettingsToolbar />} onSubmit={handleSave}>
          <Typography variant="subtitle1" gutterBottom>Profile Settings</Typography>
          <TextInput source="name" label="Full Name" />
          <TextInput source="email" type="email" />
          <PasswordInput source="password" label="Change Password" />

          <Typography variant="subtitle1" gutterBottom>Notification Preferences</Typography>
          <BooleanInput source="emailNotifications" label="Email Notifications" />
          <BooleanInput source="smsNotifications" label="SMS Notifications" />

          <Typography variant="subtitle1" gutterBottom>System Settings</Typography>
          <SelectInput source="defaultCurrency" choices={[
            { id: 'USD', name: 'US Dollar' },
            { id: 'EUR', name: 'Euro' },
            { id: 'GBP', name: 'British Pound' },
          ]} />
          <SelectInput source="timeZone" choices={[
            { id: 'UTC', name: 'UTC' },
            { id: 'EST', name: 'Eastern Time' },
            { id: 'PST', name: 'Pacific Time' },
          ]} />

          <Typography variant="subtitle1" gutterBottom>Business Settings</Typography>
          <TextInput source="clubName" label="Club Name" />
          <NumberInput source="defaultCoverCharge" label="Default Cover Charge" />

          <Typography variant="subtitle1" gutterBottom>Security Settings</Typography>
          <BooleanInput source="twoFactorAuth" label="Enable Two-Factor Authentication" />
          <NumberInput source="sessionTimeout" label="Session Timeout (minutes)" />
        </SimpleForm>
      </CardContent>
    </Card>
  );
};