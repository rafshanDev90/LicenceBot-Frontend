// SSR-safe location polyfill
export const safeLocation = typeof window !== 'undefined' 
  ? window.location 
  : {
      href: '',
      origin: '',
      protocol: '',
      host: '',
      hostname: '',
      port: '',
      pathname: '',
      search: '',
      hash: '',
      assign: () => {},
      replace: () => {},
      reload: () => {},
      toString: () => '',
    };
