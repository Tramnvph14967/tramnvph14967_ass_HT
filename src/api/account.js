import instance from "./config";

export const getAll = () => {
    const url = `/accounts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/accounts/${id}`;
    return instance.get(url);
}
export const add = (account) => {
    const url = `/accounts`;
    return instance.post(url, account)
}
export const remove = (id) => {
    const url = `/accounts/${id}`;
    return instance.delete(url)
}
export const update = (account) => {
    const url = `/accounts/${account.id}`;
    return instance.put(url, account)
}