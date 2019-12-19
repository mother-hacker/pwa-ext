import React from 'react';
import GET_ALL_COUNTRIES from '../queries/getAllCountries.graphql';
import { useQuery } from '@apollo/react-hooks';

export const TestPage = () =>  {

    const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);
    console.log(data, 'data')
    return(
        <div>
            {loading ? 'Loading...' : 'Done'}
        </div>
    )
}