import axios from 'axios';

const KEY = 'AIzaSyCIHTGy-vbtFHfvMEc-uAHM_NHJP-tdhkA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});