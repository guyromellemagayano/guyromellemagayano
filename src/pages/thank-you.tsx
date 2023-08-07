import { Seo, SimpleLayout } from '@/components'
import ThankYouData from '@/data/thank-you'
import type { NextPage } from 'next'

// Thank you page
const ThankYou: NextPage = (): React.ReactNode => {
    const { meta, hero } = ThankYouData()

    return (
        <>
            <Seo meta={meta} />

            <SimpleLayout title={hero.heading} intro={hero.description} />
        </>
    )
}

export default ThankYou
