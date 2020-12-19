import _ from 'lodash'
import { connect as reduxConnect } from 'react-redux';

export function connect(
    mapStateToProps?: Function, mapDispatchToProps?: Function) {
    return reduxConnect(mapStateToProps, mapDispatchToProps);
}

export function equals(a: any, b: any) {
    return _.isEqual(a,b);
}

export function toState(stateful: Function | Object) {
    if (stateful) {
        if (typeof stateful === 'function') {
            return stateful();
        }

        const { getState } = stateful;

        if (typeof getState === 'function') {
            return getState();
        }
    }

    return stateful;
}