import { Observable } from 'tns-core-modules/data/observable';
export declare class Common extends Observable {
    static defaultDuration: number;
    static defaultSlideDistance: number;
    static defaultFloatDirection: string;
    static presetDirections: {
        'up': {
            x: number;
            y: number;
        };
        'down': {
            x: number;
            y: number;
        };
        'left': {
            x: number;
            y: number;
        };
        'right': {
            x: number;
            y: number;
        };
    };
    static presetDurations: {
        'fast': number;
        'slow': number;
    };
    static getMsValue(duration: any): any;
}
