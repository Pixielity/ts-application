import React, { ReactNode } from 'react';
import { IApplication } from '@pixielity/ts-types';

/**
 * Provider component for the IApplication context
 *
 * @example
 * \`\`\`tsx
 * import { getApplication } from '../bootstrap/app'
 *
 * function MyApp({ Component, pageProps }) {
 *   const app = getApplication()
 *
 *   return (
 *     <AppProvider app={app}>
 *       <Component {...pageProps} />
 *     </AppProvider>
 *   )
 * }
 * \`\`\`
 */
declare function AppProvider({ app, children }: {
    app: IApplication;
    children: ReactNode;
}): React.JSX.Element;

export { AppProvider };
