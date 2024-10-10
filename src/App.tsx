import React from 'react';
import { Admin, Resource } from 'react-admin';
import { EventList, EventEdit, EventCreate } from './pages/Events';
import { VenueList, VenueEdit, VenueCreate } from './pages/Venues';
import { StaffList, StaffEdit, StaffCreate } from './pages/staff';
import { CustomerList, CustomerEdit, CustomerCreate } from './pages/customers';
import { BookingList, BookingEdit, BookingCreate } from './pages/bookings';
import { InventoryList, InventoryEdit, InventoryCreate } from './pages/inventory';
import { TransactionList, TransactionEdit, TransactionCreate } from './pages/Transactions';
import { PromoterList, PromoterEdit, PromoterCreate } from './pages/promoters';
import { GuestListList, GuestListEdit, GuestListCreate } from './pages/guestLists';
import dataProvider from './dataProvider';

import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CampaignIcon from '@mui/icons-material/Campaign';
import ListAltIcon from '@mui/icons-material/ListAlt';

const App: React.FC = () => {
  console.log('App: Rendering App component');
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon} />
      <Resource name="venues" list={VenueList} edit={VenueEdit} create={VenueCreate} icon={PlaceIcon} />
      <Resource name="staff" list={StaffList} edit={StaffEdit} create={StaffCreate} icon={PeopleIcon} />
      <Resource name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={PersonIcon} />
      <Resource name="bookings" list={BookingList} edit={BookingEdit} create={BookingCreate} icon={BookOnlineIcon} />
      <Resource name="inventory" list={InventoryList} edit={InventoryEdit} create={InventoryCreate} icon={InventoryIcon} />
      <Resource name="transactions" list={TransactionList} edit={TransactionEdit} create={TransactionCreate} icon={ReceiptIcon} />
      <Resource name="promoters" list={PromoterList} edit={PromoterEdit} create={PromoterCreate} icon={CampaignIcon} />
      <Resource name="guest_lists" list={GuestListList} edit={GuestListEdit} create={GuestListCreate} icon={ListAltIcon} />
    </Admin>
  );
};

export default App;
