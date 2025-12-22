import { memo } from 'react';
import { Spinner } from '@librechat/client';
import { useParams } from 'react-router-dom';
import { buildTree } from 'librechat-data-provider';
import { useGetSharedMessages } from 'librechat-data-provider/react-query';
import { useLocalize, useDocumentTitle } from '~/hooks';
import { useGetStartupConfig } from '~/data-provider';
import { ShareContext } from '~/Providers';
import MessagesView from './MessagesView';
import Footer from '../Chat/Footer';

function SharedView() {
  const localize = useLocalize();
  const { data: config } = useGetStartupConfig();
  const { shareId } = useParams();
  const { data, isLoading } = useGetSharedMessages(shareId ?? '');
  const dataTree = data && buildTree({ messages: data.messages });
  const messagesTree = dataTree?.length === 0 ? null : (dataTree ?? null);

  // configure document title
  let docTitle = '';
  if (config?.appTitle != null && data?.title != null) {
    docTitle = `${data.title} | ${config.appTitle}`;
  } else {
    docTitle = data?.title ?? config?.appTitle ?? document.title;
  }

  useDocumentTitle(docTitle);

  let content: JSX.Element;
  if (isLoading) {
    content = (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="" />
      </div>
    );
  } else if (data && messagesTree && messagesTree.length !== 0) {
    content = (
      <>
        <div className="final-completion group mx-auto flex min-w-[40rem] flex-col gap-3 pl-2 pr-2 pb-6 pt-4 md:max-w-[47rem] md:px-5 lg:px-1 xl:max-w-[55rem] xl:px-5">
          <div className="relative flex flex-shrink-0 flex-col items-end">
            <div>
              <div className="pt-0.5">
                <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{backgroundColor: 'rgb(121, 137, 255)', width: '20px', height: '20px', boxShadow: 'rgba(240, 246, 252, 0.1) 0px 0px 0px 1px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex w-11/12 flex-col">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <div className="border-b border-border-medium pb-6 text-base text-text-secondary">
              {new Date(data.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <p>
              <a href="/" className="underline hover:text-primary">
                {config?.interface?.customWelcome || config?.appTitle || 'Home'}
              </a>
            </p>
          </div>
        </div>

        <MessagesView messagesTree={messagesTree} conversationId={data.conversationId} />
      </>
    );
  } else {
    content = (
      <div className="flex h-screen items-center justify-center">
        {localize('com_ui_shared_link_not_found')}
      </div>
    );
  }

  return (
    <ShareContext.Provider value={{ isSharedConvo: true }}>
      <main
        className="relative flex w-full grow overflow-hidden dark:bg-surface-secondary"
        style={{ paddingBottom: '50px' }}
      >
        <div className="transition-width relative flex h-full w-full flex-1 flex-col items-stretch overflow-hidden pt-0 dark:bg-surface-secondary">
          <div className="flex h-full flex-col text-text-primary" role="presentation">
            {content}
            <div className="w-full border-t-0 pl-0 pt-2 md:w-[calc(100%-.5rem)] md:border-t-0 md:border-transparent md:pl-0 md:pt-0 md:dark:border-transparent">
              <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-gradient-to-t from-surface-secondary to-transparent px-2 pb-2 pt-8 text-xs text-text-secondary md:px-[60px]">
                <a href="/">Home</a>&nbsp;|&nbsp;
                <a href="/register" target="_blank" rel="noreferrer">
                  Chat for Free
                </a>&nbsp;|&nbsp;
                <a href="/login" target="_blank" rel="noreferrer">
<div class="relative flex flex-shrink-0 flex-col items-end"><div><div class="pt-0.5"><div class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full"><div class="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style="background-color: rgb(121, 137, 255); width: 20px; height: 20px; box-shadow: rgba(240, 246, 252, 0.1) 0px 0px 0px 1px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div></div></div></div></div>                
                  Login
                </a>
              </div>
            </div>
            <div className="w-full border-t-0 pl-0 pt-2 md:w-[calc(100%-.5rem)] md:border-t-0 md:border-transparent md:pl-0 md:pt-0 md:dark:border-transparent">
              <Footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-gradient-to-t from-surface-secondary to-transparent px-2 pb-2 pt-8 text-xs text-text-secondary md:px-[60px]" />
            </div>
          </div>
        </div>
      </main>
    </ShareContext.Provider>
  );
}

export default memo(SharedView);
