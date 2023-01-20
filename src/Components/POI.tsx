import React from 'react';
import { POIProps } from '../types';

export class POI extends React.Component<POIProps> {
    render() {
        return (
            <div className="poi flex-none flex-shrink-0 basis-64 rounded-xl border-4 border-black bg-slate-600 p-3">
                <h1 className="planetName mb-5 text-center text-4xl font-bold">Planet Name</h1>
                <ul className="poi">
                    <li className="type">Type: {this.props.type}</li>
                    <li className="atmo">Atmosphere: {this.props.atmo}</li>
                    <li className="gravity">Gravity: {this.props.gravity}</li>
                    <li className="biome">Biome: {this.props.biome}</li>
                    <li className="accord">Accord: {this.props.accord}</li>
                    <li className="align">Alignement: {this.props.align}</li>
                    <li className="magic">Magic: {this.props.magic}</li>
                    <li className="religion">Religion: {this.props.religion}</li>
                    <li className="techno">Technology: {this.props.techno}</li>
                </ul>
            </div>
        );
    }
}

export default POI;
