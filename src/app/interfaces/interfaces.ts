

export interface Coords {
    lat: number;
    lon: number;
}


export interface Weather {
    name: string;
    cod: string;
    icon: string;
    description: string;
    temp: number;
    main: string;
    minMaxTemp? : MinMaxInterface;
}

export interface MinMaxInterface {
    date : number;
    day: number;
    month: number;
    min: number;
    max :number;
}