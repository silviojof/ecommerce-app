export const fetchSearch = async (term) => {
    const response = await fetch(`/api/items?q=${term}`);
    return await response.json()
};