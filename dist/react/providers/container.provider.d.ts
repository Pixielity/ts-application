import React, { ReactNode } from 'react';
import { IContainer } from '@pixielity/ts-types';

/**
 * Provider component for the Container context
 *
 * @example
 * \`\`\`tsx
 * import { Container } from '../../container/container'
 *
 * function MyApp({ Component, pageProps }) {
 *   const container = new Container()
 *
 *   return (
 *     <ContainerProvider container={container}>
 *       <Component {...pageProps} />
 *     </ContainerProvider>
 *   )
 * }
 * \`\`\`
 */
declare function ContainerProvider({ container, children, }: {
    container: IContainer;
    children: ReactNode;
}): React.JSX.Element;

export { ContainerProvider };
