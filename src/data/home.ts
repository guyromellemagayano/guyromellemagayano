import { GetHomePageQuery } from '@/__generated__/graphql'
import logoEpicDesignLabs from '@/images/logos/epic-design-labs.png'
import logoInfosoftStudio from '@/images/logos/infosoft-studio.png'
import logoMakeDevelopment from '@/images/logos/make-development.jpeg'
import logoMultiplyMii from '@/images/logos/multiplymii.jpeg'
import logoXTeam from '@/images/logos/x-team.png'
import image4 from '@/images/photos/food.jpg'
import image5 from '@/images/photos/photography.jpg'
import image2 from '@/images/photos/speaker.jpg'
import image1 from '@/images/photos/travel.jpg'
import image3 from '@/images/photos/workplace.jpg'
import { IHomeData } from '@/interfaces/data'
import { FaustTemplateProps } from '@faustwp/core'

const HomeData = (props: FaustTemplateProps<GetHomePageQuery>): IHomeData => {
    const { data } = props

    const meta = {
        title:
            data?.generalSettings?.title ||
            'Default Title - Guy Romelle Magayano',
        description:
            data?.generalSettings?.description ||
            'Default Description - Guy Romelle Magayano',
    }

    const hero = {
        heading: data?.page?.title || 'Default Heading',
        description: data?.page?.content || 'Default Description',
    }

    const slidePhotos = [
        {
            alt: '',
            src: image1,
        },
        {
            alt: '',
            src: image2,
        },
        {
            alt: '',
            src: image3,
        },
        {
            alt: '',
            src: image4,
        },
        {
            alt: '',
            src: image5,
        },
    ]

    const cvFile = '/docs/cv.pdf'

    const workExperiences = [
        {
            company: 'X-Team',
            title: 'Senior Full Stack + WordPress Developer',
            logo: logoXTeam,
            start: 'Apr. 2023',
            end: 'Present',
        },
        {
            company: 'Epic Design Labs',
            title: 'Senior Full Stack Developer',
            logo: logoEpicDesignLabs,
            start: 'Apr. 2020',
            end: 'Feb. 2023',
        },
        {
            company: 'MultiplyMii',
            title: 'Senior Full Stack Developer',
            logo: logoMultiplyMii,
            start: 'Apr. 2020',
            end: 'Sept. 2021',
        },
        {
            company: 'MAKE Interactive BV',
            title: 'Full Stack Developer',
            logo: logoMakeDevelopment,
            start: 'Apr. 2019',
            end: 'Feb. 2020',
        },
        {
            company: 'Orth Enterprises, LLC',
            title: 'Full Stack Developer',
            logo: null,
            start: 'Apr. 2019',
            end: 'Aug. 2019',
        },
        {
            company: 'Outsourcing Wizards',
            title: 'Full Stack Developer',
            logo: null,
            start: 'Jan. 2019',
            end: 'Mar. 2019',
        },
        {
            company: 'Infosoft Studio',
            title: 'Full Stack Developer',
            logo: logoInfosoftStudio,
            start: 'Nov. 2014',
            end: 'Sept. 2018',
        },
    ]

    return {
        meta,
        hero,
        slidePhotos,
        cvFile,
        workExperiences,
    }
}

export default HomeData
