import React from 'react';
import GET_ALL_COUNTRIES from '../queries/getAllCountries.graphql';
import { useQuery } from '@apollo/react-hooks';
import { Button } from '@dshitik/amasty-test'

export const TestPage = () =>  {

    const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);
    console.log(data, 'data')
    return(
        <div>
            <Button onClick={}/>
            {loading ? 'Loading...' : 'Done'}
        </div>
    )
}