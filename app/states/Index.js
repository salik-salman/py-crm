import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    IsLoggedIn:null,
    Theme:false
});

export {useGlobalState,setGlobalState};
