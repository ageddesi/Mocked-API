import newsData from '../consts/news';
import { INews } from '../consts/news.interface';

export const getAllNews = (qty: number): INews[] => {
    return newsData.slice(0, qty);
};

export const getNewsBySlug = (slug: string): INews[] => {
    return newsData.filter((news) => news.slug === slug);
};
