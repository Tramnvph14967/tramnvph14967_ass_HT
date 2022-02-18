import instance from "./config";

export const getAll = () => {
    const url = `/news`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/news/${id}`;
    return instance.get(url);
}
export const add = (news) => {
    const url = `/news`;
    return instance.post(url, news)
}
export const remove = (id) => {
    const url = `/news/${id}`;
    return instance.delete(url)
}
export const update = (news) => {
    const url = `/news/${news.id}`;
    return instance.put(url, news)
}