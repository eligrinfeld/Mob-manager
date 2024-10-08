import { DataProvider } from 'react-admin';

const data: Record<string, any[]> = {
  venues: [],
  events: [],
  staff: [],
  inventory: [],
  customers: [],
  bookings: [],
  transactions: [],
  promoters: [],
  guestLists: [],
};

let id = 0;

export const dataProvider: DataProvider = {
  getList: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const { page, perPage } = params.pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return Promise.resolve({
      data: data[resource].slice(start, end).map(item => ({ ...item, id: item.id.toString() })),
      total: data[resource].length,
    });
  },
  getOne: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const item = data[resource].find(item => item.id.toString() === params.id.toString());
    return Promise.resolve({
      data: item ? { ...item, id: item.id.toString() } : null,
    });
  },
  getMany: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const items = data[resource].filter(item => params.ids.map(id => id.toString()).includes(item.id.toString()));
    return Promise.resolve({
      data: items.map(item => ({ ...item, id: item.id.toString() })),
    });
  },
  getManyReference: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const { page, perPage } = params.pagination;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = data[resource].filter(item => item[params.target] === params.id);
    return Promise.resolve({
      data: items.slice(start, end).map(item => ({ ...item, id: item.id.toString() })),
      total: items.length,
    });
  },
  create: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const newItem = { ...params.data, id: (++id).toString() };
    data[resource].push(newItem);
    return Promise.resolve({ data: newItem });
  },
  update: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const index = data[resource].findIndex(item => item.id.toString() === params.id.toString());
    if (index !== -1) {
      data[resource][index] = { ...data[resource][index], ...params.data, id: params.id.toString() };
      return Promise.resolve({ data: data[resource][index] });
    }
    return Promise.reject(new Error(`Unable to find ${resource} with id ${params.id}`));
  },
  updateMany: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const updatedIds = params.ids.map(id => {
      const index = data[resource].findIndex(item => item.id.toString() === id.toString());
      if (index !== -1) {
        data[resource][index] = { ...data[resource][index], ...params.data, id: id.toString() };
        return id.toString();
      }
      return null;
    }).filter(id => id !== null);
    return Promise.resolve({ data: updatedIds });
  },
  delete: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const index = data[resource].findIndex(item => item.id.toString() === params.id.toString());
    if (index !== -1) {
      const deletedItem = { ...data[resource][index], id: params.id.toString() };
      data[resource] = data[resource].filter(item => item.id.toString() !== params.id.toString());
      return Promise.resolve({ data: deletedItem });
    }
    return Promise.reject(new Error(`Unable to find ${resource} with id ${params.id}`));
  },
  deleteMany: (resource, params) => {
    if (!data[resource]) {
      data[resource] = []; // Initialize the resource if it doesn't exist
    }
    const deletedIds = params.ids.filter(id => {
      const exists = data[resource].some(item => item.id.toString() === id.toString());
      if (exists) {
        data[resource] = data[resource].filter(item => item.id.toString() !== id.toString());
      }
      return exists;
    }).map(id => id.toString());
    return Promise.resolve({ data: deletedIds });
  },
};