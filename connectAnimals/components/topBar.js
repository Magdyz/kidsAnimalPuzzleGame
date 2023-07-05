import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = () => (
  <Appbar.Header>
    <Appbar.Content title="Connect the Animal" />
    
    <Appbar.Action icon="dots-vertical" onPress={() => {}} />

  </Appbar.Header>
);

export default TopBar;

