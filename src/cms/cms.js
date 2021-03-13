import CMS from 'netlify-cms-app';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import { BlogPostPreview } from './templates/BlogPostTemplate';
import { ArtCollectionPreview } from './templates/ArtCollectionTemplate';
import { AboutPagePreview } from './templates/AboutPageTemplate';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('work', ArtCollectionPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.init();
