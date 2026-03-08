const PageContent = ({ children }) => {
  return (
    <main className="w-full flex-grow flex flex-col">
      {children}
    </main>
  );
};

export default PageContent;