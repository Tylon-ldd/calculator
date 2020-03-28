import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const screen = () => (
    <section className="screen">
        <ResultScreen>234</ResultScreen>
        <ComputationScreen>1 + 2 + 3</ComputationScreen>
    </section>
);

export default screen;