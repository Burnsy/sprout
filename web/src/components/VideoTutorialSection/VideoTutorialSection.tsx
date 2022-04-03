import { Trans, useTranslation } from 'react-i18next'

const VideoTutorialSection = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-neutral-900 py-12 md:py-32">
      <div className="mx-auto lg:max-w-6xl">
        <h3 className="space-y-12 px-4 font-serif text-xl text-white sm:text-center sm:text-2xl md:text-4xl lg:text-6xl">
          <Trans
            i18nKey={'HomePage.VideoTutorialSection.question'}
            components={{
              bold: <span className="font-bold" />,
              div: <div />,
            }}
          >
            <div>
              Enough chit-chat.{' '}
              <span className="font-bold">You prefer videos?</span>
            </div>
          </Trans>
          <div>{t('HomePage.VideoTutorialSection.answer')}</div>
        </h3>
        <div className="mx-auto mt-12 px-4 md:mt-32">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/HJOzmp8oCIQ"
            title="RedwoodJS Video Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoTutorialSection
