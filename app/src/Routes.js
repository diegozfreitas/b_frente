import React from 'react';
import {SafeAreaView} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import * as screens from './screens/'; //index

export const Routes = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <Router>
                <Stack key="root" hideNavBar>
                    <Scene key="login" initial  component={screens.Login} type="reset"/>
                   {/* chave para chamar       nome do componente que abre     no cache */}
                    <Scene key="users" initial component={screens.Users} type="reset"/>
                    <Scene key="newUser"  component={screens.NewUser} type="reset"/>
                </Stack >
            </Router>
        </SafeAreaView>
    );
};
