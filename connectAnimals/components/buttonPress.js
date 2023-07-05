import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonPress = (props) => (
  <Button icon="bee-flower" mode="contained" 
    style={{ borderRadius: 30, margin: 50 }}
        contentStyle={{ height: 60, width: 200 }}
        labelStyle={{ fontSize: 20 }}
        onPress={props.whenPressed}>
    Press me
  </Button>
);

export default ButtonPress;