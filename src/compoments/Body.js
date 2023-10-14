import {  View } from '@react-pdf/renderer';

import ExCell1 from './ExCell1.js';
import ExCell2 from './ExCell2.js';





const Body = () => (
    <View>
    <ExCell1 id={'1'} />
    <ExCell2 id={'2'} />
    </View>
);
export default Body;
