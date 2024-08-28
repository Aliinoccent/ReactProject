import { useEffect } from "react";
import axios from "axios";

const Api = () => {
  useEffect(() => {
    const fetchdata = async () => {
        const url = 'https://online-movie-database.p.rapidapi.com/v2/search-advance?country=US&language=en-US';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '49bc7a859fmsh3437b9e5f14a25cp13f875jsn3f133b6d2c0a',
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: {
                first: 100,
                after: '',
                includeReleaseDates: false,
                sort: {
                    sortBy: 'USER_RATING_COUNT',
                    sortOrder: 'DESC'
                },
                allEventNominations: [
                    {
                        eventId: 'ev0000003',
                        winnerFilter: 'NON_WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000003',
                        searchAwardCategoryId: 'bestPicture',
                        winnerFilter: 'NON_WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000003',
                        searchAwardCategoryId: 'bestDirector',
                        winnerFilter: 'NON_WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000292',
                        winnerFilter: 'NON_WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000223',
                        winnerFilter: 'NON_WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000003',
                        winnerFilter: 'WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000292',
                        winnerFilter: 'WINNER_ONLY'
                    },
                    {
                        eventId: 'ev0000223',
                        winnerFilter: 'WINNER_ONLY'
                    }
                ],
                allGenreIds: [
                    'Comedy',
                    'Horror',
                    'Romance',
                    'Thriller',
                    'Sci-Fi',
                    'Drama',
                    'Action',
                    'Adventure',
                    'Animation',
                    'Biography',
                    'Crime',
                    'Documentary',
                    'Family',
                    'Fantasy',
                    'Film-Noir',
                    'Game-Show',
                    'History',
                    'Music',
                    'Musical',
                    'Mystery',
                    'Mews',
                    'Reality-Tv',
                    'Sport',
                    'Talk-Show',
                    'War',
                    'Western'
                ],
                anyPrimaryLanguages: ['en', 'fr'],
                anyPrimaryCountries: ['CA', 'FR', 'US'],
                allKeywords: [
                    'action-hero',
                    'alien-invasion',
                    'alternate-history',
                    'anime',
                    'anti-hero',
                    'avant-garde',
                    'b-movie',
                    'bank-robbery',
                    'based-on-book',
                    'based-on-comic-book',
                    'based-on-novel',
                    'based-on-play',
                    'based-on-true-story',
                    'bechdel-test-passed',
                    'black-comedy',
                    'bollywood',
                    'caper',
                    'chick-flick',
                    'coming-of-age',
                    'conspiracy',
                    'criminal-mastermind',
                    'cult-film',
                    'cyberpunk',
                    'dark-fantasy',
                    'dc-comics',
                    'dystopia',
                    'epic',
                    'espionage',
                    'experimental-film',
                    'f-rated',
                    'fairy-tale',
                    'femme-fatale',
                    'futuristic',
                    'good-versus-evil',
                    'haunting',
                    'heist',
                    'high-school',
                    'independent-film',
                    'kidnapping',
                    'kung-fu',
                    'lgbtq',
                    'magical-realism',
                    'marvel-comics',
                    'mockumentary',
                    'monster',
                    'on-the-run',
                    'one-man-army',
                    'parallel-world',
                    'paranormal-phenomenon',
                    'parenthood',
                    'parody',
                    'police-detective',
                    'post-apocalypse',
                    'postmodern',
                    'redemption',
                    'rescue',
                    'road-movie',
                    'robbery',
                    'satire',
                    'sequel',
                    'space-travel',
                    'spaghetti-western',
                    'spoof',
                    'steampunk',
                    'superhero',
                    'supernatural-power',
                    'swashbuckler',
                    'time-travel',
                    'triple-f-rated',
                    'vampire',
                    'zombie'
                ],
                releaseDateRange: {
                    end: '2009-12-31',
                    start: '2000-01-01'
                },
                runtimeRangeMinutes: {
                    max: 99999,
                    min: 240
                },
                anyTitleTypeIds: [
                    'movie',
                    'tvSeries',
                    'short',
                    'tvEpisode',
                    'tvMiniSeries',
                    'tvMovie',
                    'tvSpecial',
                    'tvShort',
                    'videoGame',
                    'video',
                    'musicVideo',
                    'podcastSeries',
                    'podcastEpisode'
                ],
                aggregateRatingRange: {min: 7},
                ratingsCountRange: {min: 10000},
                anyWatchProviderIds: [
                    'amzn1.imdb.w2w.provider.prime_video.PRIME',
                    'amzn1.imdb.w2w.provider.prime_video',
                    'amzn1.imdb.w2w.provider.prime_video.freevee'
                ]
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    fetchdata();
  }, []);

  return <>Hello</>;
};

export default Api;
