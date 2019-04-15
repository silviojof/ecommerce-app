export const fetchSearch = async (term) => {
    const response = await fetch(`/api/items?q=${term}`);
    return await response.json()
};

export const fetchDetail = async (id) => {
    const response = await fetch(`/api/items/${id}`);
    return await response.json()
};