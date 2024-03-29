'use client'

import { FC, useContext } from 'react'

import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'

import Button from '@/components/Button'
import Container from '@/components/Container'
import ArrowLeftSvgImage from '@/components/images/svg/ArrowLeft'
import Prose from '@/components/Prose'

import { formatDate } from '@/utils/formatDate'

import type { TWithChildren } from '@/types/common'

export type TArticleCommonMeta = {
  title: string
  description: string
  date: string
}

export type TArticleCommonProps = {
  meta: TArticleCommonMeta
}

export type TArticleLayoutProps = TWithChildren & {
  article: TArticleCommonMeta
  author: string
}

/**
 * Renders the article layout component.
 * @returns The rendered article layout component.
 */
const ArticleLayout: FC<TArticleLayoutProps> = ({ children, article }) => {
  const router = useRouter(),
    { previousPathname } = useContext(AppContext),
    dateNow = new Date(),
    dateNowToString = dateNow.toISOString()

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <Button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftSvgImage className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Button>
          )}

          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {article?.title || 'Sample Article Title'}
              </h1>
              <time
                dateTime={article?.date || dateNowToString}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span>{formatDate(article?.date || dateNowToString)}</span>
              </time>
            </header>

            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}

export default ArticleLayout
