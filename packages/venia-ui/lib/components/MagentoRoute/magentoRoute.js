import React, { Fragment } from 'react';
import {
    INTERNAL_ERROR,
    NOT_FOUND,
    useMagentoRoute
} from '@magento/peregrine/lib/talons/MagentoRoute';
//TODO: Should replaced to private package
import Calc from '@dshitik/amasty-calc/lib/index'

import { fullPageLoadingIndicator } from '../LoadingIndicator';

const MESSAGES = new Map()
    .set(NOT_FOUND, 'That page could not be found. Please try again.')
    .set(INTERNAL_ERROR, 'Something went wrong. Please try again.');

const MagentoRoute = () => {
    const talonProps = useMagentoRoute();
    const { component: RootComponent, id, isLoading, routeError } = talonProps;

    if (isLoading) {
        return fullPageLoadingIndicator;
    } else if (RootComponent) {
        return <RootComponent id={id} />;
    } else if (routeError === NOT_FOUND) {
        return <Fragment>
            <h1>{MESSAGES.get(routeError)}</h1>
            <Calc/>
        </Fragment>
    }

    return <h1>{MESSAGES.get(INTERNAL_ERROR)}</h1>;
};

export default MagentoRoute;
