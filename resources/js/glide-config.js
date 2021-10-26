import Glide from '@glidejs/glide';

const glideOneInput = document.querySelector('.glide-1');
const glideOne = new Glide('.glide-1', {
  autoplay: 5000,
  hoverpause: true,
  perView: 1,
  animationDuration: 1000,
  rewindDuration: 1000,
})
glideOneInput.addEventListener('glideOneInput', function (event) {
  glideOne.update({
    autoplay: (event.target.value != 0) ? event.target.value : false,
    animationDuration: event.target.value,
    rewindDuration: event.target.value
  })
})
glideOne.mount()

const glideTwoInput = document.querySelector('.glide-2');
const glideTwo = new Glide('.glide-2', {
  autoplay: 5000,
  hoverpause: true,
  perView: 1,
  animationDuration: 1000,
  rewindDuration: 1000,
})
glideTwoInput.addEventListener('glideTwoInput', function (event) {
  glideTwo.update({
    autoplay: (event.target.value != 0) ? event.target.value : false,
    animationDuration: event.target.value,
    rewindDuration: event.target.value
  })
})
glideTwo.mount()



const glideThreeInput = document.querySelector('.glide-3');
const glideThree = new Glide('.glide-3', {
  autoplay: 5000,
  hoverpause: true,
  perView: 1,
  animationDuration: 1000,
  rewindDuration: 1000,
})
glideThreeInput.addEventListener('glideThreeInput', function (event) {
  glideThree.update({
    autoplay: (event.target.value != 0) ? event.target.value : false,
    animationDuration: event.target.value,
    rewindDuration: event.target.value
  })
})
glideThree.mount()



const glideFourInput = document.querySelector('.glide-4');
const glideFour = new Glide('.glide-4', {
  autoplay: 5000,
  hoverpause: true,
  perView: 1,
  animationDuration: 1000,
  rewindDuration: 1000,
})
glideFourInput.addEventListener('glideFourInput', function (event) {
  glideFour.update({
    autoplay: (event.target.value != 0) ? event.target.value : false,
    animationDuration: event.target.value,
    rewindDuration: event.target.value
  })
})
glideFour.mount()