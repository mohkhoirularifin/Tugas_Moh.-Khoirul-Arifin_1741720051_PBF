import GetAPI from './get'
import PostAPI from './post'
import DeleteAPI from './delete'

const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postNewsBlog = (dataYangDikirim) => PostAPI('mahasiswa', dataYangDikirim);
const deleteNewsBlog = (dataYangDihapus) => DeleteAPI('mahasiswa', dataYangDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;