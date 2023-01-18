import MandarinaGirl from '../../assets/hobbies/mandarina-girl.png'
import BlondGirl from '../../assets/hobbies/blond-girl.png'
import Kid from '../../assets/hobbies/kid.png'
import Music from '../../assets/hobbies/music.png'
import wishyPiso from '../../assets/hobbies/wishy-piso.png'
import wishyBalcon from '../../assets/hobbies/wishy-balcon.jpg'
import wishyMaria from '../../assets/hobbies/wishy-maria.jpg'
import mesh from '../../assets/hobbies/mesh.jpg'
import instagram from '../../assets/icons/socialMedia/instagram.png'
import spotify from '../../assets/icons/socialMedia/spotify.png'
import youtube from '../../assets/icons/socialMedia/youtube.png'

const art = {
  images: [
    {
      path: MandarinaGirl,
      selected: true
    },
    {
      path: BlondGirl,
      selected: false
    },
    {
      path: Kid,
      selected: false
    }
  ],
  title: 'Art',
  details: 'Relaxing hobbie by which I found a lot of awesome people',
  icons: [
    { path: 'https://www.instagram.com/sani_unu/', icon: instagram }
  ]
}

const catos = {
  images: [
    {
      path: wishyPiso,
      selected: true
    },
    {
      path: wishyBalcon,
      selected: false
    },
    {
      path: mesh,
      selected: false
    },
    {
      path: wishyMaria,
      selected: false
    }
  ],
  title: 'Catos',
  details: 'Cats cat, kitty kitten cat woah dude, cats. Not much to explain here'
}

const music = {
  images: [
    {
      path: Music,
      selected: true
    }
  ],
  title: 'Music',
  details: 'It was always a very important part in my life, I play some instruments and used to compose a little',
  icons: [
    { path: 'https://music.youtube.com/playlist?list=PLMurlrstkDbFOHxiN3dCk7s6S9cJBjSQf', icon: youtube },
    { path: 'https://open.spotify.com/playlist/37i9dQZF1EMeIcKNZDuhdf?si=7ee4ed59238a4723', icon: spotify },
  ]
}

export { catos, art, music }
