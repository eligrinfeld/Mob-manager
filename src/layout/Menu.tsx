import { Menu } from 'react-admin';
import VenueIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import StaffIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import CustomerIcon from '@mui/icons-material/Person';
import BookingIcon from '@mui/icons-material/Book';
import TransactionIcon from '@mui/icons-material/Receipt';

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item to="/venues" primaryText="Venues" leftIcon={<VenueIcon />}/>
    <Menu.Item to="/events" primaryText="Events" leftIcon={<EventIcon />}/>
    <Menu.Item to="/staff" primaryText="Staff" leftIcon={<StaffIcon />}/>
    <Menu.Item to="/inventory" primaryText="Inventory" leftIcon={<InventoryIcon />}/>
    <Menu.Item to="/customers" primaryText="Customers" leftIcon={<CustomerIcon />}/>
    <Menu.Item to="/bookings" primaryText="Bookings" leftIcon={<BookingIcon />}/>
    <Menu.Item to="/transactions" primaryText="Transactions" leftIcon={<TransactionIcon />}/>
  </Menu>
);