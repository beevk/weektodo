import supabaseClient from "@/lib/supabaseClient";

const getItem = async (key) => {
    if (supabaseClient && key.toLowerCase() === 'customtodolistids') {
        const {data} = await supabaseClient.from("tasks").select();
        console.log("Items from DB:", key, data);
    }

    return JSON.parse(localStorage.getItem(key));
};

const setItem = async (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

const updateItem = async (key, obj) => {
    const items = await getItem(key);
    const index = items.findIndex((item) => item.id === obj.id);
    items[index] = obj;
    await setItem(key, items);
}

const removeItem = async (key) => {
    localStorage.removeItem(key);
};

export {
    getItem,
    setItem,
    updateItem,
    removeItem
};
