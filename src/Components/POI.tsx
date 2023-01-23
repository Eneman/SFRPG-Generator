import React, { useEffect, useState } from 'react';
import { POIProps } from '../types';
import planetNames from '../assets/planetNames.json';
import cheerio from 'cheerio';

function getPlanetName(): string {
    let nameSize: number = Math.floor(Math.random() * 11);
    let nameParts: string[] = [];
    for (let i = 0; i < 8; i++) {
        nameParts.push(planetNames.name[i][Math.floor(Math.random() * planetNames.name[i].length)]);
    }
    while (nameParts[0] === nameParts[2]) {
        nameParts.splice(
            2,
            1,
            planetNames.name[2][Math.floor(Math.random() * planetNames.name[2].length)],
        );
    }
    while (nameParts[0] === nameParts[3]) {
        nameParts.splice(
            2,
            1,
            planetNames.name[3][Math.floor(Math.random() * planetNames.name[3].length)],
        );
    }

    if (nameSize < 2) {
        return nameParts[0] + nameParts[1] + nameParts[2] + nameParts[4] + nameParts[5];
    } else if (nameSize < 4) {
        return nameParts[0] + nameParts[1] + nameParts[2] + nameParts[6];
    } else if (nameSize < 6) {
        return nameParts[0] + nameParts[4] + nameParts[5];
    } else if (nameSize < 8) {
        return nameParts[0] + nameParts[1] + nameParts[3] + nameParts[1] + nameParts[5];
    } else {
        return (
            nameParts[3] +
            nameParts[6] +
            ' ' +
            planetNames.name[7][Math.floor(Math.random() * planetNames.name[7].length)] +
            planetNames.name[7][Math.floor(Math.random() * planetNames.name[7].length)] +
            planetNames.name[7][Math.floor(Math.random() * planetNames.name[7].length)] +
            planetNames.name[7][Math.floor(Math.random() * planetNames.name[7].length)]
        );
    }
}

export function POI(props: POIProps) {
    return (
        <div className="poi flex-none flex-shrink-0 basis-64 rounded-xl border-4 border-black bg-slate-600 p-3">
            <h1 className="planetName mb-5 text-center text-4xl font-bold capitalize">
                {getPlanetName()}
            </h1>
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
