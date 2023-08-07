import { GitHubSvgIcon, LinkedInSvgIcon, TwitterSvgIcon } from '@/components/icons/social'
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
        icon: GitHubSvgIcon,
    },
    {
        url: 'https://www.linkedin.com/in/mguyromelle/',
        ariaLabel: 'Follow on LinkedIn',
        icon: LinkedInSvgIcon,
    },
    {
        url: 'mailto:aspiredtechie2010@gmail.com',
        ariaLabel: 'aspiredtechie2010@gmail.com',
        icon: MailSvgIcon,
    },
] as ISocialLinksData[]

export default socialLinksData
