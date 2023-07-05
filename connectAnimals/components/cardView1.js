import * as React from 'react';
import { Card } from 'react-native-paper';

const CardView = (props) => (


  <Card>
    <Card.Cover
     style={{ width: 290, borderRadius: 10, margin: 10 }}

    source={props.imageSource} />
  </Card>
);

export default CardView;