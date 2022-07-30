import MandarinaGirl from '../../assets/hobbies/mandarina-girl.png'
import BlondGirl from '../../assets/hobbies/blond-girl.png'
import Kid from '../../assets/hobbies/kid.png'
import Music from '../../assets/hobbies/music.png'
import wishyPiso from '../../assets/hobbies/wishy-piso.png'
import wishyBalcon from '../../assets/hobbies/wishy-balcon.jpg'
import wishyMaria from '../../assets/hobbies/wishy-maria.jpg'
import mesh from '../../assets/hobbies/mesh.jpg'

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
  details: 'I like art'
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
  title: 'Art',
  details: 'I like art'
}

const music = {
  images: [
    {
      path: Music,
      selected: true
    }
  ],
  title: 'Art',
  details: 'I like art'
}

export { catos, art, music }
