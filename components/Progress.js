import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

function Progress({progress, color}){

    return(
        <ProgressBar progress={progress} color={color} />
    )
}
  

export default Progress;