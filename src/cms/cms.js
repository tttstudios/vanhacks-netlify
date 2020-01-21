import CMS from "netlify-cms"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewStyle('../components/css/agency.css');
CMS.registerPreviewStyle('../components/css/animate.min.css');
CMS.registerPreviewStyle('../components/css/bootstrap.min.css');