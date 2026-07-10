/* Full-bleed viewport shell for the Hatillo prototype. Fills the whole screen
   (no phone bezel, no letterbox) and hosts whatever screen is routed in.
   React is loaded globally (UMD). Responsive helper included. */

/** useIsWide(px) — true when viewport ≥ px. Drives desktop reflows. */
window.useIsWide = function useIsWide(px = 900) {
  const [wide, setWide] = React.useState(typeof window !== 'undefined' && window.innerWidth >= px);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= px);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [px]);
  return wide;
};

function AppShell({ children, background = 'var(--page)' }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100dvh',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font)',
        background,
        color: 'var(--ink)',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, { AppShell });
