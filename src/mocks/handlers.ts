import { http, HttpResponse } from 'msw';
import mockData from '../data/mockData.json';

export const handlers = [
    http.get('/api/experience', () => {
        return HttpResponse.json(mockData.experience);
    }),

    http.get('/api/projects', () => {
        return HttpResponse.json(mockData.projects);
    }),
];
