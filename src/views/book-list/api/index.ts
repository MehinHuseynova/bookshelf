import axios from 'axios'

export const getBooks = async (setBooks: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (setLoading) {
        setLoading(true)
    }
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setBooks(response.data);
        if (setLoading) {
            setLoading(false)
        }
    } 
   catch (err) {
        console.error(err);
    }
};
