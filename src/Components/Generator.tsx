import React from 'react';
import worldData from '../assets/wold-data.json';
import { POIProps } from '../types';

import POI from './POI';

interface Choice {
    name: string;
    weight: number;
}

export class Generator extends React.Component {
    weightedChoice(choices: Choice[]) {
        let rndNum = Math.random() * choices[choices.length - 1].weight;
        for (let i = 0; i < choices.length; i++) {
            if (rndNum < choices[i].weight) {
                return choices[i].name as string;
            }
        }
    }
    render() {
        let pois: POIProps[] = [];
        for (let i = 0; i < 3; i++) {
            let ele: POIProps = {
                type: this.weightedChoice(worldData.type),
                atmo: this.weightedChoice(worldData.atmo),
                gravity: this.weightedChoice(worldData.gravity),
                biome: this.weightedChoice(worldData.biome),
                accord: this.weightedChoice(worldData.accord),
                align: this.weightedChoice(worldData.alignement),
                magic: this.weightedChoice(worldData.magic),
                religion: this.weightedChoice(worldData.religion),
                techno: this.weightedChoice(worldData.technology),
            };
            pois.push(ele);
        }
        console.log(pois);
        return (
            <div className="flex flex-1 grow basis-full flex-row flex-wrap justify-evenly gap-4 text-white">
                {pois.map((e, i) => (
                    <POI
                        key={i}
                        type={e.type}
                        atmo={e.atmo}
                        gravity={e.gravity}
                        biome={e.biome}
                        accord={e.accord}
                        align={e.align}
                        magic={e.magic}
                        religion={e.religion}
                        techno={e.techno}
                    />
                ))}
            </div>
        );
    }
}

export default Generator;
