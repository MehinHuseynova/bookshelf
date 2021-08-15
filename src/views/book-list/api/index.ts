import axios from 'axios'

export const getBooks = async (setBooks: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
   const url='https://jsonplaceholder.typicode.com/posts'
    if (setLoading) {
        setLoading(true)
    }
    try {
        const response = await axios.get(url);
        setBooks(response.data);
        if (setLoading) {
            setLoading(false)
        }
    } 
   catch (err) {
        console.error(err);
    }
};
