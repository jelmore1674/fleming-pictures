export interface FeaturedFilm {
	title: string;
	featuredImg: string;
	posterImg: string;
	trailer: string;
	sypnosis: string;
}

export interface FeaturedFilms {
	featuredFilms: FeaturedFilm[];
}
