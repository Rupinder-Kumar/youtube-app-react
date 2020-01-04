import axios from "axios";

const KEY = 'AIzaSyDufOoUZKguyCm09Q6VNAVWcY9xGEm-meY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})