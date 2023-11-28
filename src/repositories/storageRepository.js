import { supabaseClient } from "@/lib/supabaseClient";

const getItem = async (key) => {
    if (key.toLowerCase() === 'customtodolistids') {
        const {data} = await supabaseClient.from("tasks").select();
        console.log("Items from DB:", key, data);
    }

    return JSON.parse(localStorage.getItem(key));
};

const setItem = async (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

// const updateItem = async (key, obj) => {
//     const items = await getItem(key);
//     const index = items.findIndex((item) => item.id === obj.id);
//     items[index] = obj;
//     await setItem(key, items);
// }

const removeItem = async (key) => {
    localStorage.removeItem(key);
};

export default {
    async get(key) {
        await getItem(key)
    },
    async set(key, obj) {
        await setItem(key, obj);
    },
    async remove(key) {
        await removeItem(key);
    },
    clean(){
        localStorage.clear();
    },
    as_json(){
        let values = {}, keys = Object.keys(localStorage), i = keys.length;
        while (i--) {
            values[keys[i]] = localStorage.getItem(keys[i]);
        }
        return values;
    },
    load_json(data){
        localStorage.setItem('config',data['config'])
        localStorage.setItem('customTodoListIds',data['customTodoListIds'])
    },
};
