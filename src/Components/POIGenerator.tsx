import cheerio from 'cheerio';
import React from 'react';
import worldData from '../assets/wold-data.json';
import { POIProps } from '../types';

import POI from './POI';

interface Choice {
    name: string;
    weight: number;
}

function weightedChoice(choices: Choice[]) {
    let rndNum = Math.random() * choices[choices.length - 1].weight;
    for (let i = 0; i < choices.length; i++) {
        if (rndNum < choices[i].weight) {
            return choices[i].name as string;
        }
    }
}

export function POIGenerator() {
    let pois: POIProps[] = [];
    for (let i = 0; i < 9; i++) {
        let ele: POIProps = {
            type: weightedChoice(worldData.type),
            atmo: weightedChoice(worldData.atmo),
            gravity: weightedChoice(worldData.gravity),
            biome: weightedChoice(worldData.biome),
            accord: weightedChoice(worldData.accord),
            align: weightedChoice(worldData.alignement),
            magic: weightedChoice(worldData.magic),
            religion: weightedChoice(worldData.religion),
            techno: weightedChoice(worldData.technology),
        };
        pois.push(ele);
    }
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

export default POIGenerator;
