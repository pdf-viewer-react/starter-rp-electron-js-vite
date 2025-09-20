
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
} from "@pdf-viewer/react";

const DEFAULT_PDF_URL = "https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
const AppPdfViewer = (props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src={DEFAULT_PDF_URL}
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};

export default AppPdfViewer