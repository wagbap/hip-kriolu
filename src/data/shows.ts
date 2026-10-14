export interface Show {
  id: string;
  day: string;
  month: string;
  year: number;
  time: string;
  venue: string;
  address: string;
  city: string;
  artistId: string;
  artistName: string;
  ticketUrl: string;
}

export const UPCOMING_SHOWS: Show[] = [
  {
    id: 'show-2026-10-26',
    day: '26',
    month: 'OUT',
    year: 2026,
    time: '21:30',
    venue: 'Rivoli Teatro Municipal',
    address: 'Praça D. Pedro IV',
    city: 'Porto',
    artistId: '9miller',
    artistName: '9 Miller',
    ticketUrl: 'https://exemplo.com/bilhetes',
  },
  {
    id: 'show-2026-11-15',
    day: '15',
    month: 'NOV',
    year: 2026,
    time: '22:00',
    venue: 'Coliseu dos Recreios',
    address: 'Rua das Portas de Santo Antão',
    city: 'Lisboa',
    artistId: 'chyna',
    artistName: 'Chyna',
    ticketUrl: 'https://exemplo.com/bilhetes',
  },
  {
    id: 'show-2026-12-02',
    day: '02',
    month: 'DEZ',
    year: 2026,
    time: '20:30',
    venue: 'Hard Club',
    address: 'Mercado Ferreira Borges',
    city: 'Porto',
    artistId: 'luna',
    artistName: 'Luna',
    ticketUrl: 'https://exemplo.com/bilhetes',
  },
  {
    id: 'show-2026-12-20',
    day: '20',
    month: 'DEZ',
    year: 2026,
    time: '23:00',
    venue: 'Lisboa ao Vivo',
    address: 'Parque das Nações',
    city: 'Lisboa',
    artistId: 'toxic',
    artistName: 'Toxic',
    ticketUrl: 'https://exemplo.com/bilhetes',
  },
];