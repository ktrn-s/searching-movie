// const defaultMovies = [
//   {
//     title: "Game of Thrones",
//     year: "(2011–2019)",
//     poster: "https://th.bing.com/th/id/OIP.hdVZvDzOsF79BDySpjRhFQAAAA?pid=ImgDet&rs=1",
//     imdb: "https://www.imdb.com/title/tt0944947/"
//   },
//   {
//     title: "Westworld",
//     year: "(2016–2022)",
//     poster: "https://i2.wp.com/thepcprinciple.com/wp-content/uploads/2020/04/Westworld.jpg?w=813&ssl=1",
//     imdb: "https://www.imdb.com/title/tt0475784/?ref_=fn_al_tt_1"
//   },
//   {
//     title: "Mindhunter",
//     year: "(2017–2019)",
//     poster: "https://th.bing.com/th/id/R.809d4f103e8facbc75a62602cf57d489?rik=NfqhV1OKhkcV1Q&pid=ImgRaw&r=0",
//     imdb: "https://www.imdb.com/title/tt5290382/"
//   },
//   {
//     title: "House of Cards",
//     year: "(2013–2018)",
//     poster: "https://pics.filmaffinity.com/House_of_Cards_TV_Series-895109996-large.jpg",
//     imdb: "https://www.imdb.com/title/tt1856010/"
//   },
//   {
//     title: "Orange Is the New Black",
//     year: "(2013–2019)",
//     poster: "https://flxt.tmsimg.com/assets/p9960171_b_v8_ab.jpg",
//     imdb: "https://www.imdb.com/title/tt2372162/"
//   },
//   {
//     title: "Dexter",
//     year: "(2006–2013)",
//     poster: "https://tse1.mm.bing.net/th/id/OIP.7-D0D75jv_pt2dyat0COYgHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
//     imdb: "https://www.imdb.com/title/tt0773262/?ref_=tt_sims_tt_t_9"
//   },
//   {
//     title: "Supernatural",
//     year: "(2005–2020)",
//     poster: "https://image.tmdb.org/t/p/original/eeYyXdjHDQWpuEMrtPXYQUsoI7I.jpg",
//     imdb: "https://www.imdb.com/title/tt0460681/?ref_=ttfc_fc_tt"
//   },
//   {
//     title: "Criminal Minds",
//     year: "(2005–2020)",
//     poster: "https://th.bing.com/th/id/OIP.4EMbgAAMA2RsLHeNHlTk6QHaLH?pid=ImgDet&rs=1",
//     imdb: "https://www.imdb.com/title/tt0452046/"
//   },
//   {
//     title: "The Walking Dead",
//     year: "(2010–2022)",
//     poster: "https://th.bing.com/th/id/OIP.5Z43qJ3r4Febcf0rZo2TzgHaLH?pid=ImgDet&rs=1",
//     imdb: "https://www.imdb.com/title/tt1520211/?ref_=ttls_li_tt"
//   },
//   {
//     title: "Chernobyl",
//     year: "(2019)",
//     poster: "https://www.theolivepress.es/wp-content/uploads/2020/04/chernobyl.jpg",
//     imdb: "https://www.imdb.com/title/tt7366338/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=12230b0e-0e00-43ed-9e59-8d5353703cce&pf_rd_r=GDJQNQXDKPGARZQ8BR9G&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_5"
//   },
//   {
//     title: "Fargo",
//     year: "(2014–2024)",
//     poster: "https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
//     imdb: "https://www.imdb.com/title/tt2802850/"
//   },
//   {
//     title: "Succession",
//     year: "(2018–2023",
//     poster: "https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM1M2FkMjkyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
//     imdb: "https://www.imdb.com/title/tt7660850/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=12230b0e-0e00-43ed-9e59-8d5353703cce&pf_rd_r=YDRR8RP0W5J9WEEK0QYH&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_48"
//   }
// ];


const defaultMovies = [
    {
        title: "Game of Thrones",
        year: "(2011–2019)",
        imdbID: "tt0944947",
        imdb: "https://www.imdb.com/title/tt0944947/"
    },
    {
        title: "Westworld",
        year: "(2016–2022)",
        imdbID: "tt0475784",
        imdb: "https://www.imdb.com/title/tt0475784/"
    },
    {
        title: "Mindhunter",
        year: "(2017–2019)",
        imdbID: "tt5290382",
        imdb: "https://www.imdb.com/title/tt5290382/"
    },
    {
        title: "House of Cards",
        year: "(2013–2018)",
        imdbID: "tt1856010",
        imdb: "https://www.imdb.com/title/tt1856010/"
    },
    {
        title: "Orange Is the New Black",
        year: "(2013–2019)",
        imdbID: "tt2372162",
        imdb: "https://www.imdb.com/title/tt2372162/"
    },
    {
        title: "Dexter",
        year: "(2006–2013)",
        imdbID: "tt0773262",
        imdb: "https://www.imdb.com/title/tt0773262/"
    },
    {
        title: "Supernatural",
        year: "(2005–2020)",
        imdbID: "tt0460681",
        imdb: "https://www.imdb.com/title/tt0460681/"
    },
    {
        title: "Criminal Minds",
        year: "(2005–2020)",
        imdbID: "tt0452046",
        imdb: "https://www.imdb.com/title/tt0452046/"
    },
    {
        title: "The Walking Dead",
        year: "(2010–2022)",
        imdbID: "tt1520211",
        imdb: "https://www.imdb.com/title/tt1520211/"
    },
    {
        title: "Chernobyl",
        year: "(2019)",
        imdbID: "tt7366338",
        imdb: "https://www.imdb.com/title/tt7366338/"
    },
    {
        title: "Fargo",
        year: "(2014–2024)",
        imdbID: "tt2802850",
        imdb: "https://www.imdb.com/title/tt2802850/"
    },
    {
        title: "Succession",
        year: "(2018–2023)",
        imdbID: "tt7660850",
        imdb: "https://www.imdb.com/title/tt7660850/"
    }
];