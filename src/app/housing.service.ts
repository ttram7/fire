import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Chicago, IL',
      city: 'Chicago',
      state: 'IL',
      photo: `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Santa Monica, CA',
      city: 'Santa Monica',
      state: 'CA',
      photo: `https://images.unsplash.com/photo-1505887579242-c7bc04062e98?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Juneau, Alaska',
      city: 'Juneau',
      state: 'AK',
      photo: `https://images.unsplash.com/photo-1631900183743-be3f34b6042b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Seattle, Washington',
      city: 'Seattle',
      state: 'WA',
      photo: `https://images.unsplash.com/photo-1589481169991-40ee02888551?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Honolulu, Hawaii',
      city: 'Honolulu',
      state: 'HI',
      photo: `https://images.unsplash.com/photo-1573993228224-5ffd3f00511c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9ub2x1bHV8ZW58MHx8MHx8fDA%3D`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'New York City, New York',
      city: 'New York City',
      state: 'NY',
      photo: `https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Las Vegas, Nevada',
      city: 'Las Vegas',
      state: 'NV',
      photo: `https://images.unsplash.com/photo-1516975698824-571e2c952dbd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Atlanta, Georgia',
      city: 'Atlanta',
      state: 'GA',
      photo: `https://images.unsplash.com/photo-1611106014123-092d7642f560?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Miami, Florida',
      city: 'Miami',
      state: 'FL',
      photo: `https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pYW1pJTIwZmxvcmlkYXxlbnwwfHwwfHx8MA%3D%3D`,
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
  ];
  //these functions allow dependencies to access service's data
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string)
  {
    console.log(`First: ${firstName}, Last: ${lastName}, Email: ${email}`);
  }
}
