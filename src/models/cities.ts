//External dependencies
import {ObjectId} from 'mongodb';

//Class Implementation
export default class City{
    constructor ( public city: string, public state: string, public median_age: number, public male_population : number,
        public female_population: number, public total_population: number, public number_of_veterans:number, public foreign_born: number,
        public average_household_size: number, public state_code:string, public race: string, public count:number,
        public id?: ObjectId) {}
    }