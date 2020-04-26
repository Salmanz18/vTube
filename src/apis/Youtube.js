import axios from 'axios';

const KEY = 'AIzaSyALndJkvr1a0pIyk5xjYacL7KKRIwrrUuI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});