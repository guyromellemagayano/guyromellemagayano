import { GithubSvgIcon, LinkedinSvgIcon, TwitterSvgIcon } from '@/components'
import MailSvgIcon from '@/components/icons/svg/Mail'
import { ISocialLinksData } from '@/interfaces'

const socialLinksData = [
    {
        url: 'https://twitter.com/mguyromelle',
        ariaLabel: 'Follow on Twitter',
        icon: TwitterSvgIcon,
    },
    {
        url: 'https://github.com/guyromellemagayano',
        ariaLabel: 'Follow on GitHub',
        icon: GithubSvgIcon,
    },
    {
        url: 'https://www.linkedin.com/in/mguyromelle/',
        ariaLabel: 'Follow on LinkedIn',
        icon: LinkedinSvgIcon,
    },
    {
        url: 'mailto:aspiredtechie2010@gmail.com',
        ariaLabel: 'aspiredtechie2010@gmail.com',
        icon: MailSvgIcon,
    },
] as ISocialLinksData[]

export default socialLinksData
