export class Movie {
    itemId: string;
    title: string;
    poster: string;
    contentRating: string;
    description: string;
    genre: string[] = [];
    actor: string[] = [];
    director: string;
    duration: string;
    aggregateRating: string;
    datePublished: string;
    tag: string[];
}
