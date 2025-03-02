const MainContent = ({ children, color = "light" }) => (
  <main
    className={`bg-${color} font-paragraph dn-scrollbar-hidden h-screen max-h-[calc(100vh-80px)] space-y-8 overflow-auto px-8 pt-12 pb-12`}
  >
    {children}
  </main>
);

export default MainContent;
