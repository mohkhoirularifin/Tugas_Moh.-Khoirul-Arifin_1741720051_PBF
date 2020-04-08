import GetAPI from './get'
import PostAPI from './post'
import DeleteAPI from './delete'

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYangDikirim) => PostAPI('posts', dataYangDikirim);
const deleteNewsBlog = (dataYangDihapus) => DeleteAPI('posts', dataYangDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;