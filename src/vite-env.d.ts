/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface customWindow extends Window {
  detachFetchInterval: () => void;
}

declare const window: customWindow;
