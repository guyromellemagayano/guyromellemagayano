'use client'

import { forwardRef } from 'react'

import {
  Button,
  Form,
  FormProps,
  FormRef,
  Input
} from '@guy-romelle-magayano/react-components'
import {
  Div,
  Heading,
  P,
  Span
} from '@guy-romelle-magayano/react-components/server'

import { cn } from '@guy-romelle-magayano/react-utils'

import { MailSvg } from '@guy-romelle-magayano/portfolio/components'

export type NewsletterLayoutRef = FormRef
export type NewsletterLayoutProps = FormProps

const strings = {
  stayUpToDate: 'Stay up to date',
  getNotified:
    'Get notified when I publish something new, and unsubscribe at any time.',
  email: 'Email address',
  join: 'Join'
}

/**
 * Renders the newsletter layout component.
 * @param {NewsletterLayoutProps} props - The props of the newsletter layout.
 * @param {NewsletterLayoutRef} ref - The reference of the newsletter layout.
 * @returns The rendered newsletter layout component.
 */
const NewsletterLayout = forwardRef<NewsletterLayoutRef, NewsletterLayoutProps>(
  ({ className, ...rest }, ref) => {
    const thankYouPageLink = '/thank-you'

    return (
      <Form
        {...rest}
        ref={ref}
        action={thankYouPageLink}
        className={cn(
          className,
          'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
        )}
      >
        <Heading
          as="h2"
          className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          <MailSvg className="h-6 w-6 flex-none" />
          <Span className="ml-3">{strings.stayUpToDate}</Span>
        </Heading>
        <P className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {strings.getNotified}
        </P>
        <Div className="mt-6 flex">
          <Input
            type="email"
            placeholder={strings.email}
            aria-label={strings.email}
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-amber-400 dark:focus:ring-amber-400/10"
          />
          <Button
            type="submit"
            className="ml-4 inline-flex flex-none  items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
          >
            {strings.join}
          </Button>
        </Div>
      </Form>
    )
  }
)

NewsletterLayout.displayName = 'NewsletterLayout'

export default NewsletterLayout
