import profile_picture from '~/images/heading/profile_pictures.jpg'
import master_degree from '~/images/curriculum/master_degree.png'
import bachelor_degree from '~/images/curriculum/bachelor_degree.png'
import birth from '~/images/curriculum/conegliano.png'
import isiss_casagrande from '~/images/curriculum/ISISSMarcoCasagrande.png'
import carousel_personal1 from '~/images/personal-info/carousel_personal1.jpg'
import carousel_personal2 from '~/images/personal-info/carousel_personal2.jpg'
import carousel_personal3 from '~/images/personal-info/carousel_personal3.jpg'
import carousel_personal4 from '~/images/personal-info/carousel_personal4.jpg'
import { ref } from 'vue'

export const curriculumImages = {
    profile_picture: profile_picture,
    master_degree: master_degree,
    bachelor_degree: bachelor_degree,
    isiss_casagrande: isiss_casagrande,
    birth: birth,
}
export const headerImage = profile_picture
export const personalInfoCarousel = [
    { image: carousel_personal1 },
    { image: carousel_personal2 },
    { image: carousel_personal3 },
    { image: carousel_personal4 },
]

export const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '1050px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '725px',
        numVisible: 1,
        numScroll: 1,
    },
])

