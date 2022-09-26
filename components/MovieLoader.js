import {React, useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';

export default function MovieLoader() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    getMovies = async () => {
        await fetch("https://reactnative.dev/movies.json")
        .then(async (response) => await response.json())
        .then( (data) => setData(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));

        console.log(isLoading);
        console.log(data);
    }

    useEffect( ()=> {
        getMovies();
    }, []);

    const renderItem = (item) => {
        return (
            <Text>
                {item.id}
                {item.title}
                {item.releaseYear}
            </Text>
        )
    }


    return (
        {isLoading} ? 
        <Text>Loading!</Text>
        :
        <FlatList
            data = {data}
            renderItem = {renderItem}
            keyExtractor = { ({id}, index) => id}
        ></FlatList>
    )
}

