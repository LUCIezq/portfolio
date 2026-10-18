import type { Project } from "@/types/Project";


export const projects: Project[] = [
  {
    date: '2024-2025',
    title: 'Gestión de Consorcios',
    description:
      'Administrar consorcios: unidades funcionales, gastos, reservas y notificaciones, con roles para cada tipo de usuario.',
    technologies: ['ASP .NET Core MVC', '.NET', 'SQL Server', 'LINQ'],
    architecture: ['Controller', 'Service', 'Repository', 'EF Core'],
    linkGit: 'https://github.com/LUCIezq/gestion-consorcio',
  },
  {
    date: '2024-2025',
    title: 'Ecommerce Fullstack',
    description:
      'Catálogo, usuarios y órdenes de compra, con una API REST y un cliente en Angular.',
    technologies: ['Express.js ', 'TypeScript', 'Prisma', 'MySQL', 'Angular', 'Docker'],
    architecture: ['Router', 'Controller', 'Service', 'Repository'],
    linkGit: 'https://github.com/LUCIezq/TW-II-BACKEND',
  },
  {
    date: '2023-2024',
    title: 'Preguntados',
    description: 'Partidas multijugador en tiempo real, con puntajes y roles de usuario.',
    technologies: ['Java', 'Spring Boot', 'WebSockets', 'JUnit', 'Mockito'],
    architecture: ['Controller', 'Service', 'JPA'],
    linkGit: 'https://github.com/LUCIezq/TP-TALLER-WEB-I',
  },
];
