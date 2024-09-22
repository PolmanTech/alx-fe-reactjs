import React, { useState } from 'react'
import fetchUserData from '../services/githubService'

const Search = () => {
    const [search, setSearch] = useState('')
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([])

        try {
            const data = await fetchUserData({ search, location, minRepos });
            setUserData(data.items);

        } catch (error) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='font-[philosopher]'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search Github Username'
                    name='search-input'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className='block py-1 px-2 rounded-[50px] w-full mb-4 outline-none border-b-2 border-zinc-400'
                />
                <input
                    type="text"
                    placeholder='Location'
                    name='location'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    className='block py-1 px-2 rounded-[50px] w-full mb-4 outline-none border-b-2 border-zinc-400'
                />
                <input
                    type="text"
                    placeholder='Minimum Repos'
                    name='min-repo'
                    onChange={(e) => setMinRepos(e.target.value)}
                    value={minRepos}
                    className='block py-1 px-2 rounded-[50px] w-full mb-4 outline-none border-b-2 border-zinc-400'
                />
                <button className='rounded-md px-8 py-2 text-white bg-zinc-800 border-none font-bold block my-0 mx-auto mb-4 cursor-pointer' type="submit">Search</button>
            </form>

            {loading && <p className='text-green-400 text-center font-bold rounded-md shadow-md p-3 sm:w-2/3 my-0 mx-auto'>Loading...</p>}
            {error && <p className='text-red-600 text-center font-bold rounded-md shadow-md p-3 sm:w-2/3 my-0 mx-auto'>{error}</p>}

            <div className='mt-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
                {userData.map(user =>  (
                    <div key={user.id} className='shadow-lg rounded-lg p-6 text-center bg-slate-100'>
                        <img src={user.avatar_url} alt="User Profile" className='rounded-full h-24 w-24 block my-0 mx-auto mb-4' />
                        <p className='font-bold text-lg'>{user.login}</p>
                        {user.location && <p>Location: {user.location}</p>}
                        {/* {user.repos_url && <a href={user.repos_url} target='_blank' className='block text-blue-500 underline'>Show Repositories</a>} */}
                        <a href={user.html_url} target="_blank" className='text-sm border p-2 border-slate-500 rounded-md font-bold mt-2 block'>View profile</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search