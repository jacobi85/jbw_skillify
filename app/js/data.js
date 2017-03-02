/**
 * Created by jacob on 2017-03-02.
 */
window.Data = (function(){

    const Data = [
        {
            id: 1,
            name: 'Newbie',
            league: 'bronze',
            minScore: 1,
            maxScore: 9
        },
        {
            id: 2,
            name: 'Inept',
            league: 'bronze',
            minScore: 10,
            maxScore: 19
        },
        {
            id: 3,
            name: 'Poor',
            league: 'bronze',
            minScore: 20,
            maxScore: 39
        },
        {
            id: 4,
            name: 'Weak',
            league: 'bronze',
            minScore: 40,
            maxScore: 69
        },
        {
            id: 5,
            name: 'Mediocre',
            league: 'bronze',
            minScore: 70,
            maxScore: 109
        },
        {
            id: 6,
            name: 'Unskilled',
            league: 'bronze',
            minScore: 110,
            maxScore: 159
        },
        {
            id: 7,
            name: 'Green',
            league: 'bronze',
            minScore: 160,
            maxScore: 259
        },
        {
            id: 8,
            name: 'Beginner',
            league: 'bronze',
            minScore: 260,
            maxScore: 359
        },
        {
            id: 9,
            name: 'Novice',
            league: 'bronze',
            minScore: 360,
            maxScore: 459
        },
        {
            id: 10,
            name: 'Amateur',
            league: 'bronze',
            minScore: 460,
            maxScore: 599
        },
        {
            id: 11,
            name: 'Apprentice',
            league: 'silver',
            minScore: 600,
            maxScore: 799
        },
        {
            id: 12,
            name: 'Initiated',
            league: 'silver',
            minScore: 800,
            maxScore: 999
        },
        {
            id: 13,
            name: 'Qualified',
            league: 'silver',
            minScore: 1000,
            maxScore: 1199
        },
        {
            id: 14,
            name: 'Trained',
            league: 'silver',
            minScore: 1200,
            maxScore: 1399
        },
        {
            id: 15,
            name: 'Able',
            league: 'silver',
            minScore: 1400,
            maxScore: 1599
        },
        {
            id: 16,
            name: 'Competent',
            league: 'silver',
            minScore: 1600,
            maxScore: 1799
        },
        {
            id: 17,
            name: 'Adept',
            league: 'silver',
            minScore: 1800,
            maxScore: 1999
        },
        {
            id: 18,
            name: 'Capable',
            league: 'silver',
            minScore: 2000,
            maxScore: 2199
        },
        {
            id: 19,
            name: 'Skilled',
            league: 'silver',
            minScore: 2200,
            maxScore: 2399
        },
        {
            id: 20,
            name: 'Experienced',
            league: 'silver',
            minScore: 2400,
            maxScore: 2599
        },
        {
            id: 21,
            name: 'Proficient',
            league: 'gold',
            minScore: 2600,
            maxScore: 2799
        },
        {
            id: 22,
            name: 'Good',
            league: 'gold',
            minScore: 2800,
            maxScore: 2999
        },
        {
            id: 23,
            name: 'Great',
            league: 'gold',
            minScore: 3000,
            maxScore: 3199
        },
        {
            id: 24,
            name: 'Inspiring',
            league: 'gold',
            minScore: 3200,
            maxScore: 3399
        },
        {
            id: 25,
            name: 'Impressive',
            league: 'gold',
            minScore: 3400,
            maxScore: 3599
        },
        {
            id: 26,
            name: 'Veteran',
            league: 'gold',
            minScore: 3600,
            maxScore: 3799
        },
        {
            id: 27,
            name: 'Professional',
            league: 'gold',
            minScore: 3800,
            maxScore: 3999
        },
        {
            id: 28,
            name: 'Specialist',
            league: 'gold',
            minScore: 4000,
            maxScore: 4199
        },
        {
            id: 29,
            name: 'Advanced',
            league: 'gold',
            minScore: 4200,
            maxScore: 4799
        },
        {
            id: 30,
            name: 'Remarkable',
            league: 'gold',
            minScore: 4500,
            maxScore: 4799
        },
        {
            id: 31,
            name: 'Expert',
            league: 'platinum',
            minScore: 4800,
            maxScore: 5099
        },
        {
            id: 32,
            name: 'Exceptional',
            league: 'platinum',
            minScore: 5100,
            maxScore: 5399
        },
        {
            id: 33,
            name: 'Amazing',
            league: 'platinum',
            minScore: 5400,
            maxScore: 5699
        },
        {
            id: 34,
            name: 'Incredible',
            league: 'platinum',
            minScore: 5700,
            maxScore: 5999
        },
        {
            id: 35,
            name: 'Marvelous',
            league: 'platinum',
            minScore: 6000,
            maxScore: 6299
        },
        {
            id: 36,
            name: 'Astonishing',
            league: 'platinum',
            minScore: 6300,
            maxScore: 6599
        },
        {
            id: 37,
            name: 'Outstanding',
            league: 'platinum',
            minScore: 6600,
            maxScore: 6899
        },
        {
            id: 38,
            name: 'Champion',
            league: 'platinum',
            minScore: 6900,
            maxScore: 7199
        },
        {
            id: 39,
            name: 'Elite',
            league: 'platinum',
            minScore: 7200,
            maxScore: 7499
        },
        {
            id: 40,
            name: 'Superior',
            league: 'platinum',
            minScore: 7500,
            maxScore: 7799
        },
        {
            id: 41,
            name: 'Supreme',
            league: 'diamond',
            minScore: 7800,
            maxScore: 8099
        },
        {
            id: 42,
            name: 'Master',
            league: 'diamond',
            minScore: 8100,
            maxScore: 8399
        },
        {
            id: 43,
            name: 'Grand Master',
            league: 'diamond',
            minScore: 8400,
            maxScore: 8699
        },
        {
            id: 44,
            name: 'Arch Master',
            league: 'diamond',
            minScore: 8700,
            maxScore: 9099
        },
        {
            id: 45,
            name: 'Supreme Master',
            league: 'diamond',
            minScore: 9100,
            maxScore: 9499
        },
        {
            id: 46,
            name: 'Ultimate Master',
            league: 'diamond',
            minScore: 9500,
            maxScore: 9999
        },
        {
            id: 47,
            name: 'Great Master',
            league: 'diamond',
            minScore: 10000,
            maxScore: 11999
        },
        {
            id: 48,
            name: 'Great Grand Master',
            league: 'diamond',
            minScore: 12000,
            maxScore: 13999
        },
        {
            id: 49,
            name: 'Great Supreme Master',
            league: 'diamond',
            minScore: 14000,
            maxScore: 15999
        },
        {
            id: 50,
            name: 'Great Ultimate Master',
            league: 'diamond',
            minScore: 16000,
            maxScore: 17999
        },
        {
            id: 51,
            name: 'Godlike',
            league: 'diamond',
            minScore: 18000,
            maxScore: 20000
        }
    ];
    return Data;
})();