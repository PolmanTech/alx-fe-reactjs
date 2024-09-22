
import axios from 'axios'

const fetchUserData = async ({ search, location, minRepos }) => {
    const query = `${search}`;

    if(location) {
        query +=`+location:${location}`;
    }

    if(minRepos) {
        query +=`+repos:${minRepos}`;
    }
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
    return response.data;
}

export default fetchUserData
