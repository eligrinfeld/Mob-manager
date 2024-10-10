import { DataProvider, fetchUtils } from 'react-admin';
import { supabase } from './supabaseClient';

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        
        const { data, error, count } = await supabase
            .from(resource)
            .select('*', { count: 'exact' })
            .order(field, { ascending: order === 'ASC' })
            .range((page - 1) * perPage, page * perPage - 1);

        if (error) throw error;

        return {
            data: data || [],
            total: count || 0,
        };
    },

    getOne: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .select('*')
            .eq('id', params.id)
            .single();

        if (error) throw error;

        return { data };
    },

    getMany: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .select('*')
            .in('id', params.ids);

        if (error) throw error;

        return { data: data || [] };
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        
        const { data, error, count } = await supabase
            .from(resource)
            .select('*', { count: 'exact' })
            .eq(params.target, params.id)
            .order(field, { ascending: order === 'ASC' })
            .range((page - 1) * perPage, page * perPage - 1);

        if (error) throw error;

        return {
            data: data || [],
            total: count || 0,
        };
    },

    create: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .insert(params.data)
            .select();

        if (error) throw error;

        return { data: data[0] };
    },

    update: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .update(params.data)
            .eq('id', params.id)
            .select();

        if (error) throw error;

        return { data: data[0] };
    },

    updateMany: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .update(params.data)
            .in('id', params.ids)
            .select();

        if (error) throw error;

        return { data: data };
    },

    delete: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .delete()
            .eq('id', params.id)
            .select();

        if (error) throw error;

        return { data: data[0] };
    },

    deleteMany: async (resource, params) => {
        const { data, error } = await supabase
            .from(resource)
            .delete()
            .in('id', params.ids)
            .select();

        if (error) throw error;

        return { data: data };
    },
};

export default dataProvider;