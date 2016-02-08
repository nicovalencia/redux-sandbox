const DEFAULT_PEOPLE = [
  {
    id: 1,
    firstName: 'Nico',
    lastName: 'Valencia',
    avatar: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpf1/v/t1.0-9/12592420_10153734008586832_7472220807890518550_n.jpg?oh=e1114c5513be2267189dddfb07be30cd&oe=57356ACC'
  },
  {
    id: 2,
    firstName: 'Finn',
    lastName: 'the Human',
    avatar: 'http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658'
  },
  {
    id: 3,
    firstName: 'Jake',
    lastName: 'the Dogg',
    avatar: 'http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c9/603138_454321168018988_647044807_n.png/revision/latest?cb=20140624024310'
  }
]

const people = (state = DEFAULT_PEOPLE, action) => {
  return state
}

export default people