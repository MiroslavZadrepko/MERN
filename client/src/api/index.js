
import axios from 'axios';

export const fetchPosts = () => axios.get(`http://locallhost:5000/posts`);
