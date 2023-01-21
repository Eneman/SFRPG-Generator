import React from 'react';
import { POIProps } from '../types';

/* export class POI extends React.Component<POIProps> {
    render() {
        return (
            
        );
    }
} */

export function POI(props: POIProps) {
    return (
        <div className="poi flex-none flex-shrink-0 basis-64 rounded-xl border-4 border-black bg-slate-600 p-3">
            <h1 className="planetName mb-5 text-center text-4xl font-bold">Planet Name</h1>
            <ul className="poi">
                <li className="type">Type: {props.type}</li>
                <li className="atmo">Atmosphere: {props.atmo}</li>
                <li className="gravity">Gravity: {props.gravity}</li>
                <li className="biome">Biome: {props.biome}</li>
                <li className="accord">Accord: {props.accord}</li>
                <li className="align">Alignement: {props.align}</li>
                <li className="magic">Magic: {props.magic}</li>
                <li className="religion">Religion: {props.religion}</li>
                <li className="techno">Technology: {props.techno}</li>
            </ul>
        </div>
    );
}

export default POI;
