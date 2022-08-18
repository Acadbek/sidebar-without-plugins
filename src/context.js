import React from 'react'
import { createContext, useState, useEffect } from 'react'
import img from './assets/svg/discord.svg'
import img2 from './assets/svg/facebook.svg'
import img3 from './assets/svg/figma.svg'
import img4 from './assets/svg/google.svg'
import img6 from './assets/svg/pinterest.svg'
import img7 from './assets/svg/spotify.svg'
import img8 from './assets/svg/telegram.svg'
import img9 from './assets/svg/twitch.svg'
export const Context = createContext();

function Contexts({ children }) {
  const [data, setData] = useState([
    {
      id: 1,
      user: 'Zemeister',
      name: 'Qora Beva',
      url: 'https://uzstudio.tv/uploads/posts/2021-06/medium/1624991320_qora-beva-1.jpg',
    },
    {
      id: 2,
      user: 'Zemeister',
      name: 'Shang-chi Legend of the ten rings',
      url: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/04/Shang-Chi-Poster-Marvel.jpg',
    },
    {
      id: 3,
      user: 'Zemeister',
      name: 'Mortal Combat',
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900',
    },
    {
      id: 4,
      user: 'Zemeister',
      name: 'Spiderman, No Way Home',
      url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    },
    {
      id: 5,
      user: 'Zemeister',
      name: 'Tor Marvel Kino',
      url: 'https://marveldom.ru/wp-content/uploads/2019/09/Chris-Hemsworth-Thor-Art-by-PC-Designs.jpg',
    },
    {
      id: 6,
      user: 'Zemeister',
      name: 'Siderman , Home Coming',
      url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    },
    {
      id: 7,
      name: 'Avengers',
      user: 'Zemeister',
      url: 'https://www.film.ru/sites/default/files/filefield_paths/https_blogs-images.forbes.com_scottmendelson_files_2019_03_payoff_1-sht_online_v6_domestic_lg-1200x675.jpg',
    },
    {
      id: 8,
      name: 'Doimiy',
      user: 'Zemeister',
      url: 'https://marvel.com.ru/uploads/images/b494bda820ae8cfa6843e8a6.jpg',
    },
    {
      id: 9,
      user: 'Zemeister',
      name: 'Home Alone 1',
      url: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg',
    },
    {
      id: 10,
      name: 'Home Alone 2 , New York Lost in',
      url: 'https://m.media-amazon.com/images/I/91tXzecvy-L._SL1500_.jpg',
      user: 'Zemeister',
    }])
  const [menus, setMenus] = useState([
    {
      title: "Discord",
      icon: img,
      // top: '80',
      additionalLinks: [
        {
          title: "Nitro",
        },
        {
          title: "Safety",
        },
        {
          title: "Support",
        },
      ],
    },
    {
      title: "Facebook",
      icon: img2,
      additionalLinks: [
        {
          title: "Connect ",
        },
        {
          title: "Friends",
        },
        {
          title: "World",
        },
      ],
    },
    {
      title: "Figma",
      icon: img3,
      additionalLinks: [
        {
          title: "Recents ",
        },
        {
          title: "Drafts",
        },
        {
          title: "Community",
        },
      ],
    },
    {
      title: "Google",
      icon: img4,
      additionalLinks: [
        {
          title: "Photos ",
        },
        {
          title: "Users",
        },
        {
          title: "Settings",
        },
      ],
    },
    {
      title: "Twitch",
      icon: img9,
      additionalLinks: [
        {
          title: "Photos ",
        },
        {
          title: "Users",
        },
        {
          title: "Settings",
        },
      ],
    },
    {
      title: "Pinterest",
      icon: img6
    },
    {
      title: "Telegram",
      icon: img8,
    },
    {
      title: "Spotify",
      icon: img7
    },
  ])

  const url = 'https://imdb-api.com/API/Top250Movies/k_9q9l5nv0'

  // const getData = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '819bb0834bmsh17f9bfadda99926p19b31ejsn19fa5efa06b5',
  //       'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  //     }
  //   };

  //   fetch(url, options)
  //     .then(response => response.json())
  //     // .then(response => setData(response.items))
  //     .catch(err => console.error(err));
  // }
  // console.log(data, 'context');
  // useEffect(() => {
  //   getData()
  // }, []);

  return (
    <Context.Provider value={[menus, setData, data, setData]}>
      {children}
    </Context.Provider>
  )
}

export default Contexts