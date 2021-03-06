import CMS from 'netlify-cms-app';

import { AboutPagePreview } from './templates/AboutPageTemplate';
import { ArtCollectionPreview } from './templates/ArtCollectionTemplate';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';
import { BlogPostPreview } from './templates/BlogPostTemplate';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('work', ArtCollectionPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.init();
