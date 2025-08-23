export interface Profile {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const profiles: Profile[] = [
  { id: 1, name: 'Bruce Marshall Mathers III', email: 'slim@e.net', phone: '123-456-7890' },
  { id: 2, name: 'Will Smith', email: 'will@en.net', phone: '987-654-3210' },
  { id: 3, name: 'Jackie Chan', email: 'Jakie@ch.net', phone: '555-123-4567' },
];

export class ProfileApi {
  public getContact(id: number): Promise<Profile | null> {
    return new Promise((resolve) => {
      const profile = profiles.find(p => p.id === id) || null;
      const delay = Math.random() * 1000 + 1000; // Random delay between 500ms and 1500ms

      setTimeout(() => resolve(profile), delay); // Simulate network delay
    });
  }
}