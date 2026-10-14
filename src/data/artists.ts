import type { Artist, CategoryOption, YearOption } from '../types';

export const CATEGORIES: CategoryOption[] = [
  { value: 'all',                       label: 'Todas as categorias' },
  { value: 'rapper-underground',        label: 'Rapper Underground' },
  { value: 'rapper-comercial-afro-rap', label: 'Rapper Comercial / Afro Rap' },
  { value: 'rapper-old-school',         label: 'Rapper Old School' },
  { value: 'new-school',                label: 'New School' },
  { value: 'dj',                        label: 'DJ' },
  { value: 'produtores',                label: 'Produtores' },
  { value: 'poetas-slammers',           label: 'Poetas / Slammers' },
  { value: 'b-boys',                    label: 'B-Boys' },
  { value: 'grafiti',                   label: 'Grafiti' },
  { value: 'break-dancer',              label: 'Break Dancer' },
];

export const YEARS: YearOption[] = [
  { value: 2026,  label: 'Lançado em 2026' },
  { value: 2025,  label: 'Lançado em 2025' },
  { value: 2024,  label: 'Lançado em 2024' },
  { value: 2023,  label: 'Lançado em 2023' },
  { value: 2022,  label: 'Lançado em 2022' },
  { value: 2021,  label: 'Lançado em 2021' },
  { value: 2020,  label: 'Lançado em 2020' },
  { value: 'all', label: 'Todos os anos' },
];

export const ARTISTS: Artist[] = [
  { id: 'jrex',      name: 'J Rex',      role: 'Produtor',      img: 'https://res.cloudinary.com/dpsrmzvsl/image/upload/v1792000913/748499667_1741728453694691_4533013048243068761_n_tfs1pf.jpg', location: 'Txada Tráz, PT',   group: 'Wolf Gang',     categories: ['produtores', 'rapper-underground'], year: 1997 },
  { id: 'chyna',     name: 'Chyna',     role: 'MC',            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop', location: 'Porto, PT',    group: 'Mind Da Gap',      categories: ['rapper-underground', 'new-school'], year: 2026 },
  { id: 'cruzfader', name: 'Cruzfader', role: 'DJ, Produtor',  img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop', location: 'Amadora, PT',  group: 'BDA',              categories: ['dj', 'produtores'], year: 2025 },
  { id: 'maze',      name: 'Maze',      role: 'MC',            img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop', location: 'Sintra, PT',   group: 'Da Weasel',        categories: ['rapper-old-school'], year: 2025 },
  { id: '9miller',   name: '9 Miller',  role: 'MC',            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop', location: 'Loures, PT',   group: '9MM',              categories: ['rapper-comercial-afro-rap'], year: 2026 },
  { id: 'capituna',  name: 'Capituna',  role: 'MC',            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop', location: 'Setúbal, PT',  group: '—',                categories: ['rapper-underground', 'new-school'], year: 2025 },
  { id: 'sore',      name: 'Sore',      role: 'B-Boy',         img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=500&fit=crop', location: 'Barreiro, PT', group: 'RockaFellas',      categories: ['b-boys', 'break-dancer'], year: 2024 },
  { id: 'allexia',   name: 'Allexia',   role: 'DJ, Produtora', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop', location: 'Braga, PT',    group: 'Sisters in Sound', categories: ['dj', 'produtores'], year: 2026 },
  { id: 'nitro',     name: 'Nitro',     role: 'MC',            img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop', location: 'Porto, PT',    group: 'Kova M',           categories: ['rapper-comercial-afro-rap'], year: 2025 },
  { id: 'blaze',     name: 'Blaze',     role: 'Writer',        img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop', location: 'Cascais, PT',  group: 'VLA Crew',         categories: ['grafiti'], year: 2024 },
  { id: 'kobra',     name: 'Kobra',     role: 'DJ',            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop', location: 'Odivelas, PT', group: '—',                categories: ['dj'], year: 2023 },
  { id: 'luna',      name: 'Luna',      role: 'MC',            img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop', location: 'Faro, PT',     group: 'Ladies First',     categories: ['rapper-underground', 'poetas-slammers'], year: 2026 },
  { id: 'rebel',     name: 'Rebel',     role: 'B-Boy',         img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop', location: 'Amadora, PT',  group: 'Top Rock Society', categories: ['b-boys'], year: 2025 },
  { id: 'fenix',     name: 'Fénix',     role: 'Produtora',     img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop', location: 'Coimbra, PT',  group: '—',                categories: ['produtores', 'poetas-slammers'], year: 2024 },
  { id: 'toxic',     name: 'Toxic',     role: 'MC',            img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop', location: 'Porto, PT',    group: 'Real Punch',       categories: ['rapper-underground'], year: 2023 },
  { id: 'vibe',      name: 'Vibe',      role: 'DJ',            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', location: 'Lisboa, PT',   group: 'BDA',              categories: ['dj'], year: 2022 },
  { id: 'rasta',     name: 'Rasta',     role: 'Writer',        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop', location: 'Setúbal, PT',  group: 'VLA Crew',         categories: ['grafiti'], year: 2025 },
  { id: 'neon',      name: 'Neon',      role: 'MC',            img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop', location: 'Lisboa, PT',   group: 'Alta Família',     categories: ['rapper-underground', 'rapper-old-school'], year: 2024 },
  { id: 'storm',     name: 'Storm',     role: 'B-Boy',         img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop', location: 'Almada, PT',   group: 'RockaFellas',      categories: ['b-boys', 'break-dancer'], year: 2026 },
  { id: 'aura',      name: 'Aura',      role: 'MC',            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop', location: 'Lisboa, PT',   group: 'Ladies First',     categories: ['rapper-underground', 'new-school'], year: 2025 },
  { id: 'cypher',    name: 'Cypher',    role: 'DJ',            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop', location: 'Porto, PT',    group: 'Mind Da Gap',      categories: ['dj', 'produtores'], year: 2024 },
  { id: 'pulse',     name: 'Pulse',     role: 'Produtor',      img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=500&fit=crop', location: 'Braga, PT',    group: '—',                categories: ['produtores'], year: 2023 },
  { id: 'riot',      name: 'Riot',      role: 'MC',            img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop', location: 'Barreiro, PT', group: '9MM',              categories: ['rapper-old-school'], year: 2022 },
  { id: 'echo',      name: 'Echo',      role: 'Writer',        img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop', location: 'Cascais, PT',  group: 'VLA Crew',         categories: ['grafiti', 'poetas-slammers'], year: 2026 },
];