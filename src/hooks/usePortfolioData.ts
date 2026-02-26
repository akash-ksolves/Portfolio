import mockData from '@/data/mockData.json';

export const usePortfolioData = () => {
    return mockData;
};

export type PortfolioData = typeof mockData;
