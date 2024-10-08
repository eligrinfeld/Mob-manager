import React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { dataProvider } from './dataProvider';
import { MyLayout } from './layout';
import { Settings } from './settings';

import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CampaignIcon from '@mui/icons-material/Campaign';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';

import { VenueList, VenueEdit, VenueCreate } from './venues';
import { EventList, EventEdit, EventCreate } from './events';
import { StaffList, StaffEdit, StaffCreate } from './staff';
import { InventoryList, InventoryEdit, InventoryCreate } from './inventory';
import { CustomerList, CustomerEdit, CustomerCreate } from './customers';
import { BookingList, BookingEdit, BookingCreate } from './bookings';
import { TransactionList, TransactionEdit, TransactionCreate } from './transactions';
import { PromoterList, PromoterEdit, PromoterCreate } from './promoters';
import { GuestListList, GuestListEdit, GuestListCreate } from './guestLists';
import { EventAnalyticsList, EventAnalyticsShow } from './eventAnalytics';
import Dashboard from './Dashboard';

const TestComponent = () => <div>Test Component</div>;

export const App: React.FC = () => {
  console.log('Rendering App component');
  console.log('dataProvider:', dataProvider);

  return (
    <>
      <TestComponent />
      <Admin 
        dataProvider={dataProvider} 
        dashboard={Dashboard}
        layout={MyLayout}
        catchAll={() => <div>Error: Something went wrong</div>}
      >
        <Resource name="venues" list={VenueList} edit={VenueEdit} create={VenueCreate} icon={PlaceIcon} />
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon} />
        <Resource name="staff" list={StaffList} edit={StaffEdit} create={StaffCreate} icon={PeopleIcon} />
        <Resource name="inventory" list={InventoryList} edit={InventoryEdit} create={InventoryCreate} icon={InventoryIcon} />
        <Resource name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={PersonIcon} />
        <Resource name="bookings" list={BookingList} edit={BookingEdit} create={BookingCreate} icon={BookOnlineIcon} />
        <Resource name="transactions" list={TransactionList} edit={TransactionEdit} create={TransactionCreate} icon={ReceiptIcon} />
        <Resource name="promoters" list={PromoterList} edit={PromoterEdit} create={PromoterCreate} icon={CampaignIcon} />
        <Resource name="guest-lists" options={{ label: 'Guest Lists' }} list={GuestListList} edit={GuestListEdit} create={GuestListCreate} icon={ListAltIcon} />
        <Resource name="event-analytics" options={{ label: 'Event Analytics' }} list={EventAnalyticsList} show={EventAnalyticsShow} icon={AssessmentIcon} />
        <CustomRoutes>
          <Route path="/settings" element={<Settings />} />
        </CustomRoutes>
      </Admin>
    </>
  );
};
