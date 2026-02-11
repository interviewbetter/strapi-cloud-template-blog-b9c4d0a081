import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlogSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_sections';
  info: {
    displayName: 'blogSections';
    icon: 'manyWays';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionslug: Schema.Attribute.String;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedBlogs extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs';
  info: {
    displayName: 'blogs';
  };
  attributes: {
    blogid: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdby: Schema.Attribute.String;
    createdbyimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createddate: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    sections: Schema.Attribute.Component<'shared.blog-sections', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCategories extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    displayName: 'categories';
    icon: 'crown';
  };
  attributes: {
    blogs: Schema.Attribute.Component<'shared.blogs', true>;
    categoryid: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    categoryName: Schema.Attribute.String;
  };
}

export interface SharedComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_components';
  info: {
    displayName: 'component';
  };
  attributes: {};
}

export interface SharedCourseDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_details';
  info: {
    displayName: 'courseDetails';
  };
  attributes: {
    badge: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedCourses extends Struct.ComponentSchema {
  collectionName: 'components_shared_courses';
  info: {
    displayName: 'Courses';
  };
  attributes: {
    courseDetails: Schema.Attribute.Component<'shared.course-details', true>;
    courseName: Schema.Attribute.String;
    key: Schema.Attribute.String;
  };
}

export interface SharedFoundersbarBlogSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_foundersbar_blog_sections';
  info: {
    displayName: 'foundersbarBlogSections';
  };
  attributes: {
    sectionDescription: Schema.Attribute.RichText;
    sectionid: Schema.Attribute.String & Schema.Attribute.Unique;
    sectionMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sectionTitle: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    displayName: 'navigation.link';
    icon: 'arrowDown';
  };
  attributes: {};
}

export interface SharedNavigationMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_menu_items';
  info: {
    displayName: 'navigation.menuItems';
  };
  attributes: {};
}

export interface SharedOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    tabName: Schema.Attribute.Component<'shared.tab-name', false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTabName extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_names';
  info: {
    displayName: 'Tab name';
  };
  attributes: {
    courses: Schema.Attribute.Component<'shared.courses', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    FullStack: Schema.Attribute.Component<'shared.ui-ux', true>;
  };
}

export interface SharedUiUx extends Struct.ComponentSchema {
  collectionName: 'components_shared_ui_uxes';
  info: {
    displayName: 'UI UX';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blog-sections': SharedBlogSections;
      'shared.blogs': SharedBlogs;
      'shared.categories': SharedCategories;
      'shared.component': SharedComponent;
      'shared.course-details': SharedCourseDetails;
      'shared.courses': SharedCourses;
      'shared.foundersbar-blog-sections': SharedFoundersbarBlogSections;
      'shared.media': SharedMedia;
      'shared.navigation-link': SharedNavigationLink;
      'shared.navigation-menu-items': SharedNavigationMenuItems;
      'shared.options': SharedOptions;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sections': SharedSections;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tab-name': SharedTabName;
      'shared.tabs': SharedTabs;
      'shared.ui-ux': SharedUiUx;
    }
  }
}
