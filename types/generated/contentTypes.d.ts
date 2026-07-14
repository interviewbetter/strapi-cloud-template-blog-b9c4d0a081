import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    description: 'Write about yourself and the content you create';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: 'Create your blog content';
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    blocks: Schema.Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: 'Create authors for your content';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerPathCareerPath extends Struct.CollectionTypeSchema {
  collectionName: 'career_paths';
  info: {
    displayName: 'careerPath';
    pluralName: 'career-paths';
    singularName: 'career-path';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-path.career-path'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: 'Organize your content into categories';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCourseCourse extends Struct.CollectionTypeSchema {
  collectionName: 'courses';
  info: {
    displayName: 'Course';
    pluralName: 'courses';
    singularName: 'course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course.course'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCrmAndSaleCrmAndSale extends Struct.CollectionTypeSchema {
  collectionName: 'crm_and_sales';
  info: {
    displayName: 'OS-CrmAndSale';
    pluralName: 'crm-and-sales';
    singularName: 'crm-and-sale';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flipCardSection: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::crm-and-sale.crm-and-sale'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEdTechEdTech extends Struct.CollectionTypeSchema {
  collectionName: 'ed_teches';
  info: {
    displayName: 'OS-EdTech';
    pluralName: 'ed-teches';
    singularName: 'ed-tech';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flipSection: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ed-tech.ed-tech'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbAboutFbAbout extends Struct.CollectionTypeSchema {
  collectionName: 'fb_abouts';
  info: {
    displayName: 'FB_About';
    pluralName: 'fb-abouts';
    singularName: 'fb-about';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerCta: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-about.fb-about'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whereWeWant: Schema.Attribute.JSON;
  };
}

export interface ApiFbAdvisoryFbAdvisory extends Struct.CollectionTypeSchema {
  collectionName: 'fb_advisories';
  info: {
    displayName: 'FB_Advisory';
    pluralName: 'fb-advisories';
    singularName: 'fb-advisory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-advisory.fb-advisory'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbAiSoftwareFbAiSoftware
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_ai_softwares';
  info: {
    displayName: 'FB_AISoftware';
    pluralName: 'fb-ai-softwares';
    singularName: 'fb-ai-software';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-ai-software.fb-ai-software'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    pricing: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatWeDeliver: Schema.Attribute.JSON;
    whyStartupNeed: Schema.Attribute.JSON;
  };
}

export interface ApiFbCityFbCity extends Struct.CollectionTypeSchema {
  collectionName: 'fb_cities';
  info: {
    displayName: 'FB-City';
    pluralName: 'fb-cities';
    singularName: 'fb-city';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.sections', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ecoSystem: Schema.Attribute.JSON;
    footerData: Schema.Attribute.JSON;
    foundersbar_blogs: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-blog.foundersbar-blog'
    >;
    heroSection: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-city.fb-city'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    slug: Schema.Attribute.String;
    storySection: Schema.Attribute.JSON;
    subImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbDirectoryFbDirectory extends Struct.CollectionTypeSchema {
  collectionName: 'fb_directories';
  info: {
    displayName: 'FB_Directory';
    pluralName: 'fb-directories';
    singularName: 'fb-directory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-directory.fb-directory'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbFixedCostMvpFbFixedCostMvp
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_fixed_cost_mvps';
  info: {
    displayName: 'FB_Fixed_Cost_MVP';
    pluralName: 'fb-fixed-cost-mvps';
    singularName: 'fb-fixed-cost-mvp';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    fifthSection: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-fixed-cost-mvp.fb-fixed-cost-mvp'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbForCreatorFbForCreator
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_for_creators';
  info: {
    displayName: 'FB_For_Creator';
    pluralName: 'fb-for-creators';
    singularName: 'fb-for-creator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-for-creator.fb-for-creator'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    newModel: Schema.Attribute.JSON;
    owner: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    strategyFirst: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbGtmFbGtm extends Struct.CollectionTypeSchema {
  collectionName: 'fb_gtms';
  info: {
    displayName: 'FB_GTM';
    pluralName: 'fb-gtms';
    singularName: 'fb-gtm';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-gtm.fb-gtm'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbHipaaFbHipaa extends Struct.CollectionTypeSchema {
  collectionName: 'fb_hipaas';
  info: {
    displayName: 'FB_HIPAA';
    pluralName: 'fb-hipaas';
    singularName: 'fb-hipaa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    developmentProcess: Schema.Attribute.JSON;
    faq: Schema.Attribute.JSON;
    footerSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-hipaa.fb-hipaa'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    pricing: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    StepSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbHomeFbHome extends Struct.CollectionTypeSchema {
  collectionName: 'fb_homes';
  info: {
    displayName: 'FB_Home';
    pluralName: 'fb-homes';
    singularName: 'fb-home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comparisonData: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-home.fb-home'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.JSON;
    trustedBy: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbMarketValidationFbMarketValidation
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_market_validations';
  info: {
    displayName: 'FB_Market_Validation';
    pluralName: 'fb-market-validations';
    singularName: 'fb-market-validation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-market-validation.fb-market-validation'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    roadmap: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    validation: Schema.Attribute.JSON;
  };
}

export interface ApiFbPerformanceMarketingFbPerformanceMarketing
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_performance_marketings';
  info: {
    displayName: 'FB_Performance_Marketing';
    pluralName: 'fb-performance-marketings';
    singularName: 'fb-performance-marketing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    fifthSection: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-performance-marketing.fb-performance-marketing'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbProductBlueprintFbProductBlueprint
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_product_blueprints';
  info: {
    displayName: 'FB_Product_Blueprint';
    pluralName: 'fb-product-blueprints';
    singularName: 'fb-product-blueprint';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.JSON;
    fifthSection: Schema.Attribute.JSON;
    footer: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-product-blueprint.fb-product-blueprint'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFbSoloFounderFbSoloFounder
  extends Struct.CollectionTypeSchema {
  collectionName: 'fb_solo_founders';
  info: {
    displayName: 'FB_Solo_Founder';
    pluralName: 'fb-solo-founders';
    singularName: 'fb-solo-founder';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefitSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    finalCTA: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    howItWorks: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fb-solo-founder.fb-solo-founder'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    problemSection: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarAuthorFoundersbarAuthor
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_authors';
  info: {
    displayName: 'Foundersbar_Author';
    pluralName: 'foundersbar-authors';
    singularName: 'foundersbar-author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    foundersbar_blogs: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-blog.foundersbar-blog'
    >;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-author.foundersbar-author'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String;
    nameMobile: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarBlogFoundersbarBlog
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_blogs';
  info: {
    displayName: 'foundersbarBlog';
    pluralName: 'foundersbar-blogs';
    singularName: 'foundersbar-blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogSections: Schema.Attribute.Component<
      'shared.foundersbar-blog-sections',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdDate: Schema.Attribute.Date;
    ctaButtonLink: Schema.Attribute.String;
    ctaButtonText: Schema.Attribute.String;
    ctaContentDesktop: Schema.Attribute.Blocks;
    ctaContentMobile: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    fb_city: Schema.Attribute.Relation<'manyToOne', 'api::fb-city.fb-city'>;
    foundersbar_authors: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-author.foundersbar-author'
    >;
    foundersbar_blog_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-category.foundersbar-category'
    >;
    foundersbar_blogs: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-blog.foundersbar-blog'
    >;
    foundersbar_references: Schema.Attribute.Component<
      'shared.references',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-blog.foundersbar-blog'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    related_articles: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-blog.foundersbar-blog'
    >;
    schema: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarCaseStudyListFoundersbarCaseStudyList
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_case_study_lists';
  info: {
    displayName: 'foundersbarCaseStudyList';
    pluralName: 'foundersbar-case-study-lists';
    singularName: 'foundersbar-case-study-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desc: Schema.Attribute.Blocks;
    foundersbar_case_study_detail: Schema.Attribute.Relation<
      'oneToOne',
      'api::foundersbar-case-study.foundersbar-case-study'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-case-study-list.foundersbar-case-study-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarCaseStudyFoundersbarCaseStudy
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_case_studies';
  info: {
    displayName: 'foundersbarCaseStudyDetails';
    pluralName: 'foundersbar-case-studies';
    singularName: 'foundersbar-case-study';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caseStudiesSections: Schema.Attribute.Component<
      'shared.foundersbar-case-studies-sections',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaContent: Schema.Attribute.Blocks;
    faqSection: Schema.Attribute.Component<'shared.faq', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-case-study.foundersbar-case-study'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    overviews: Schema.Attribute.Component<'shared.product-overview', true>;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoSection: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    videoTitle: Schema.Attribute.Blocks;
  };
}

export interface ApiFoundersbarCategoryFoundersbarCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_categories';
  info: {
    displayName: 'foundersbarBlogCategory';
    pluralName: 'foundersbar-categories';
    singularName: 'foundersbar-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    foundersbar_blogs: Schema.Attribute.Relation<
      'manyToMany',
      'api::foundersbar-blog.foundersbar-blog'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-category.foundersbar-category'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarHomeFoundersbarHome
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_homes';
  info: {
    displayName: 'foundersbarHome';
    pluralName: 'foundersbar-homes';
    singularName: 'foundersbar-home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-home.foundersbar-home'
    > &
      Schema.Attribute.Private;
    pricingCard: Schema.Attribute.Component<'shared.pricing-section', true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFoundersbarSiteMapFoundersbarSiteMap
  extends Struct.CollectionTypeSchema {
  collectionName: 'foundersbar_site_maps';
  info: {
    displayName: 'foundersbarSiteMap';
    pluralName: 'foundersbar-site-maps';
    singularName: 'foundersbar-site-map';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::foundersbar-site-map.foundersbar-site-map'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    defaultSeo: Schema.Attribute.Component<'shared.seo', false>;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    siteDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Struct.CollectionTypeSchema {
  collectionName: 'headers';
  info: {
    displayName: 'Header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::header.header'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbAcademyPageIbAcademyPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_academy_pages';
  info: {
    displayName: 'IB_Academy_Page';
    pluralName: 'ib-academy-pages';
    singularName: 'ib-academy-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-academy-page.ib-academy-page'
    > &
      Schema.Attribute.Private;
    ourCourses: Schema.Attribute.JSON;
    popularCourses: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    turnYourSkills: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbArticlePageIbArticlePage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_article_pages';
  info: {
    displayName: 'IB_Article_Page';
    pluralName: 'ib-article-pages';
    singularName: 'ib-article-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleList: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroMobile: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    levelUp: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-article-page.ib-article-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbAtsCheckPageIbAtsCheckPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_ats_check_pages';
  info: {
    displayName: 'IB_AtsCheck_Page';
    pluralName: 'ib-ats-check-pages';
    singularName: 'ib-ats-check-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    atsCta: Schema.Attribute.JSON;
    atsInsights: Schema.Attribute.JSON;
    atsPlanSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroMobile: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-ats-check-page.ib-ats-check-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbCoursePageIbCoursePage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_course_pages';
  info: {
    displayName: 'IB_Course_Page';
    pluralName: 'ib-course-pages';
    singularName: 'ib-course-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backendDevelopment: Schema.Attribute.Component<
      'shared.backend-development',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deliveryManagement: Schema.Attribute.Component<
      'shared.delivery-management',
      false
    >;
    frontendDevelopment: Schema.Attribute.Component<
      'shared.frontend-development',
      false
    >;
    fullStackDevelopment: Schema.Attribute.Component<
      'shared.full-stack-development',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-course-page.ib-course-page'
    > &
      Schema.Attribute.Private;
    mobileDevelopment: Schema.Attribute.Component<
      'shared.mobile-app-development',
      false
    >;
    performanceMarketing: Schema.Attribute.Component<
      'shared.perfomance-marketing',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbFaangPageIbFaangPage extends Struct.CollectionTypeSchema {
  collectionName: 'ib_faang_pages';
  info: {
    displayName: 'IB_Faang_Page';
    pluralName: 'ib-faang-pages';
    singularName: 'ib-faang-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    freePersonal: Schema.Attribute.JSON;
    heroMobile: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    hiringPattern: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-faang-page.ib-faang-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    startFaang: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyThis: Schema.Attribute.JSON;
    whyThisMobile: Schema.Attribute.JSON;
  };
}

export interface ApiIbFreshserPageIbFreshserPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_freshser_pages';
  info: {
    displayName: 'IB_Freshser_Page';
    pluralName: 'ib-freshser-pages';
    singularName: 'ib-freshser-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    allInOneCareer: Schema.Attribute.JSON;
    careerPath: Schema.Attribute.JSON;
    careerStart: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faangPrep: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    hiring: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-freshser-page.ib-freshser-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbHomePageIbHomePage extends Struct.CollectionTypeSchema {
  collectionName: 'ib_home_pages';
  info: {
    displayName: 'IB_Home_Page';
    pluralName: 'ib-home-pages';
    singularName: 'ib-home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    allInOneCareer: Schema.Attribute.JSON;
    announcementBar: Schema.Attribute.JSON;
    careerPath: Schema.Attribute.JSON;
    careerStart: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faangPrep: Schema.Attribute.JSON;
    footerDesktop: Schema.Attribute.JSON;
    footerMobile: Schema.Attribute.JSON;
    header: Schema.Attribute.JSON;
    headerMobile: Schema.Attribute.JSON;
    heroMobile: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    hiring: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-home-page.ib-home-page'
    > &
      Schema.Attribute.Private;
    popularCourses: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbInterviewPrepPageIbInterviewPrepPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_interview_prep_pages';
  info: {
    displayName: 'IB_Interview_Prep_Page';
    pluralName: 'ib-interview-prep-pages';
    singularName: 'ib-interview-prep-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    curriculum: Schema.Attribute.JSON;
    floatingButton: Schema.Attribute.JSON;
    getGuidance: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-interview-prep-page.ib-interview-prep-page'
    > &
      Schema.Attribute.Private;
    outcome: Schema.Attribute.JSON;
    programHighlights: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    theTraining: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbInterviewPrepProfessionalPageIbInterviewPrepProfessionalPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_interview_prep_professional_pages';
  info: {
    displayName: 'IB_Interview_Prep_Professional_Page';
    pluralName: 'ib-interview-prep-professional-pages';
    singularName: 'ib-interview-prep-professional-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    curriculum: Schema.Attribute.JSON;
    floatingButton: Schema.Attribute.JSON;
    getGuidance: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-interview-prep-professional-page.ib-interview-prep-professional-page'
    > &
      Schema.Attribute.Private;
    outcome: Schema.Attribute.JSON;
    programHighlights: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    theTraining: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIbPricingPageIbPricingPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'ib_pricing_pages';
  info: {
    displayName: 'IB_Pricing_Page';
    pluralName: 'ib-pricing-pages';
    singularName: 'ib-pricing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    careerGuidence: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fresher: Schema.Attribute.Component<'shared.fresher-pricing', false>;
    freshersMain: Schema.Attribute.Component<'shared.fresher-main', false>;
    heroMobile: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    interviewPack: Schema.Attribute.JSON;
    interviewPackMobile: Schema.Attribute.JSON;
    interviewPrepIconic: Schema.Attribute.JSON;
    interviewPrepMobile: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ib-pricing-page.ib-pricing-page'
    > &
      Schema.Attribute.Private;
    plans: Schema.Attribute.JSON;
    plansMobile: Schema.Attribute.JSON;
    professional: Schema.Attribute.Component<
      'shared.professional-pricing',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Struct.CollectionTypeSchema {
  collectionName: 'landing_pages';
  info: {
    displayName: 'landing-page';
    pluralName: 'landing-pages';
    singularName: 'landing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing-page.landing-page'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLandingLanding extends Struct.CollectionTypeSchema {
  collectionName: 'landings';
  info: {
    displayName: 'landing';
    pluralName: 'landings';
    singularName: 'landing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing.landing'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMetaSeoMetaSeo extends Struct.CollectionTypeSchema {
  collectionName: 'meta_seos';
  info: {
    displayName: 'Meta-seo';
    pluralName: 'meta-seos';
    singularName: 'meta-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::meta-seo.meta-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoDetails: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsAiModernizationOsAiModernization
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_ai_modernizations';
  info: {
    displayName: 'OS-AI-Modernization';
    pluralName: 'os-ai-modernizations';
    singularName: 'os-ai-modernization';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-ai-modernization.os-ai-modernization'
    > &
      Schema.Attribute.Private;
    meaningfulBusinessImpact: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsApplicationModernizationOsApplicationModernization
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_application_modernizations';
  info: {
    displayName: 'OS-ApplicationModernization';
    pluralName: 'os-application-modernizations';
    singularName: 'os-application-modernization';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ApplicationCapabilities: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    evolveSystem: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-application-modernization.os-application-modernization'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsBuildTheRightProductOsBuildTheRightProduct
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_build_the_right_products';
  info: {
    displayName: 'OS-BuildTheRightProduct';
    pluralName: 'os-build-the-right-products';
    singularName: 'os-build-the-right-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-build-the-right-product.os-build-the-right-product'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    strategicPlanning: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsCmmcOsCmmc extends Struct.CollectionTypeSchema {
  collectionName: 'os_cmmcs';
  info: {
    displayName: 'OS-CMMC';
    pluralName: 'os-cmmcs';
    singularName: 'os-cmmc';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-cmmc.os-cmmc'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsComplianceOsCompliance
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_compliances';
  info: {
    displayName: 'OS-Compliance';
    pluralName: 'os-compliances';
    singularName: 'os-compliance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-compliance.os-compliance'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsConstructionOsConstruction
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_constructions';
  info: {
    displayName: 'OS-Construction';
    pluralName: 'os-constructions';
    singularName: 'os-construction';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-construction.os-construction'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    solutions: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsConsumerApplicationOsConsumerApplication
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_consumer_applications';
  info: {
    displayName: 'OS-ConsumerApplication';
    pluralName: 'os-consumer-applications';
    singularName: 'os-consumer-application';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-consumer-application.os-consumer-application'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsDataAndAiOsDataAndAi extends Struct.CollectionTypeSchema {
  collectionName: 'os_data_and_ais';
  info: {
    displayName: 'OS-DataAndAi';
    pluralName: 'os-data-and-ais';
    singularName: 'os-data-and-ai';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-data-and-ai.os-data-and-ai'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsDedicatedTeamOsDedicatedTeam
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_dedicated_teams';
  info: {
    displayName: 'OS-DedicatedTeam';
    pluralName: 'os-dedicated-teams';
    singularName: 'os-dedicated-team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-dedicated-team.os-dedicated-team'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsDeliveryModelOsDeliveryModel
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_delivery_models';
  info: {
    displayName: 'OS-Delivery-Model';
    pluralName: 'os-delivery-models';
    singularName: 'os-delivery-model';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-delivery-model.os-delivery-model'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsDfarOsDfar extends Struct.CollectionTypeSchema {
  collectionName: 'os_dfars';
  info: {
    displayName: 'OS-DFAR';
    pluralName: 'os-dfars';
    singularName: 'os-dfar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-dfar.os-dfar'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsDomainAndExpertiseOsDomainAndExpertise
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_domain_and_expertises';
  info: {
    displayName: 'OS-DomainAndExpertise';
    pluralName: 'os-domain-and-expertises';
    singularName: 'os-domain-and-expertise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blackCardSection: Schema.Attribute.JSON;
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-domain-and-expertise.os-domain-and-expertise'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsEnergeticAiOsEnergeticAi
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_energetic_ais';
  info: {
    displayName: 'OS-Energetic-AI';
    pluralName: 'os-energetic-ais';
    singularName: 'os-energetic-ai';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-energetic-ai.os-energetic-ai'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    practicalAi: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsEnterpriseOrganisationOsEnterpriseOrganisation
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_enterprise_organisations';
  info: {
    displayName: 'OS-EnterpriseOrganisation';
    pluralName: 'os-enterprise-organisations';
    singularName: 'os-enterprise-organisation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fifthSection: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-enterprise-organisation.os-enterprise-organisation'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    sixthSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsEntertainmentSportOsEntertainmentSport
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_entertainment_sports';
  info: {
    displayName: 'OS-EntertainmentSport';
    pluralName: 'os-entertainment-sports';
    singularName: 'os-entertainment-sport';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-entertainment-sport.os-entertainment-sport'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsFractionalCtoOsFractionalCto
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_fractional_ctos';
  info: {
    displayName: 'OS-FractionalCTO';
    pluralName: 'os-fractional-ctos';
    singularName: 'os-fractional-cto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-fractional-cto.os-fractional-cto'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsGxPOsGxP extends Struct.CollectionTypeSchema {
  collectionName: 'os_gx_ps';
  info: {
    displayName: 'OS-GxP';
    pluralName: 'os-gx-ps';
    singularName: 'os-gx-p';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    howWeSupport: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-gx-p.os-gx-p'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsHealthcareOsHealthcare
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_healthcares';
  info: {
    displayName: 'OS-Healthcare';
    pluralName: 'os-healthcares';
    singularName: 'os-healthcare';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    healthcareSolutions: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-healthcare.os-healthcare'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsHippaOsHippa extends Struct.CollectionTypeSchema {
  collectionName: 'os_hippas';
  info: {
    displayName: 'OS-Hippa';
    pluralName: 'os-hippas';
    singularName: 'os-hippa';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-hippa.os-hippa'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsHomeOsHome extends Struct.CollectionTypeSchema {
  collectionName: 'os_homes';
  info: {
    displayName: 'OS-Home';
    pluralName: 'os-homes';
    singularName: 'os-home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardsSection: Schema.Attribute.JSON;
    carousalSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-home.os-home'
    > &
      Schema.Attribute.Private;
    mapSection: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    pricingSection: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsIndustryOsIndustry extends Struct.CollectionTypeSchema {
  collectionName: 'os_industries';
  info: {
    displayName: 'OS-industry';
    pluralName: 'os-industries';
    singularName: 'os-industry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-industry.os-industry'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsLogisticsSupplyOsLogisticsSupply
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_logistics_supplies';
  info: {
    displayName: 'OS-LogisticsSupply';
    pluralName: 'os-logistics-supplies';
    singularName: 'os-logistics-supply';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-logistics-supply.os-logistics-supply'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsMidMarketBusinessOsMidMarketBusiness
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_mid_market_businesses';
  info: {
    displayName: 'OS-MidMarketBusiness';
    pluralName: 'os-mid-market-businesses';
    singularName: 'os-mid-market-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fifthSection: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    fourthSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-mid-market-business.os-mid-market-business'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    sixthSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsMlOpsAndDevopOsMlOpsAndDevop
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_ml_ops_and_devops';
  info: {
    displayName: 'OS-MLOpsAndDevop';
    pluralName: 'os-ml-ops-and-devops';
    singularName: 'os-ml-ops-and-devop';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-ml-ops-and-devop.os-ml-ops-and-devop'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsNist800OsNist800 extends Struct.CollectionTypeSchema {
  collectionName: 'os_nist_800s';
  info: {
    displayName: 'OS-NIST-800';
    pluralName: 'os-nist-800s';
    singularName: 'os-nist-800';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    howWeSupport: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-nist-800.os-nist-800'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsOperationSupportOsOperationSupport
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_operation_supports';
  info: {
    displayName: 'OS-OperationSupport';
    pluralName: 'os-operation-supports';
    singularName: 'os-operation-support';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-operation-support.os-operation-support'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsProductDevelopmentOsProductDevelopment
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_product_developments';
  info: {
    displayName: 'OS-ProductDevelopment';
    pluralName: 'os-product-developments';
    singularName: 'os-product-development';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardsSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    endToEndEncryption: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-product-development.os-product-development'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsProductEngineeringOsProductEngineering
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_product_engineerings';
  info: {
    displayName: 'OS-ProductEngineering';
    pluralName: 'os-product-engineerings';
    singularName: 'os-product-engineering';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buildForGrowth: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    engineeringCapabilities: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-product-engineering.os-product-engineering'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsQualityEngineeringOsQualityEngineering
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_quality_engineerings';
  info: {
    displayName: 'OS-QualityEngineering';
    pluralName: 'os-quality-engineerings';
    singularName: 'os-quality-engineering';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-quality-engineering.os-quality-engineering'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    qualityBeyond: Schema.Attribute.JSON;
    qualityEngineering: Schema.Attribute.JSON;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsSoc2OsSoc2 extends Struct.CollectionTypeSchema {
  collectionName: 'os_soc_2s';
  info: {
    displayName: 'OS-SOC-2';
    pluralName: 'os-soc-2s';
    singularName: 'os-soc-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    howWeSupport: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-soc-2.os-soc-2'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsSoftwareDevelopmentOsSoftwareDevelopment
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_software_developments';
  info: {
    displayName: 'OS-SoftwareDevelopment';
    pluralName: 'os-software-developments';
    singularName: 'os-software-development';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-software-development.os-software-development'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsStaffAugmentationOsStaffAugmentation
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_staff_augmentations';
  info: {
    displayName: 'OS-Staff-Augmentation';
    pluralName: 'os-staff-augmentations';
    singularName: 'os-staff-augmentation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-staff-augmentation.os-staff-augmentation'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsStartupsViaFoundersbarOsStartupsViaFoundersbar
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_startups_via_foundersbars';
  info: {
    displayName: 'OS-Startups-via-Foundersbar';
    pluralName: 'os-startups-via-foundersbars';
    singularName: 'os-startups-via-foundersbar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-startups-via-foundersbar.os-startups-via-foundersbar'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    structuredPath: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsStrategyConsultingOsStrategyConsulting
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_strategy_consultings';
  info: {
    displayName: 'OS-StrategyConsulting';
    pluralName: 'os-strategy-consultings';
    singularName: 'os-strategy-consulting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    consultingCapabilities: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-strategy-consulting.os-strategy-consulting'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    relatedCapabilities: Schema.Attribute.JSON;
    schema: Schema.Attribute.JSON;
    transformation: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsTalentSolutionOsTalentSolution
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_talent_solutions';
  info: {
    displayName: 'OS-TalentSolution';
    pluralName: 'os-talent-solutions';
    singularName: 'os-talent-solution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-talent-solution.os-talent-solution'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    talentSolution: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsWorkforceManagementOsWorkforceManagement
  extends Struct.CollectionTypeSchema {
  collectionName: 'os_workforce_managements';
  info: {
    displayName: 'OS-Workforce-Management';
    pluralName: 'os-workforce-managements';
    singularName: 'os-workforce-management';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardSection: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flipCardSection: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-workforce-management.os-workforce-management'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOsZeroTrustOsZeroTrust extends Struct.CollectionTypeSchema {
  collectionName: 'os_zero_trusts';
  info: {
    displayName: 'OS-ZeroTrust';
    pluralName: 'os-zero-trusts';
    singularName: 'os-zero-trust';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::os-zero-trust.os-zero-trust'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    secondSection: Schema.Attribute.JSON;
    thirdSection: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRetailAndCommerceRetailAndCommerce
  extends Struct.CollectionTypeSchema {
  collectionName: 'retail_and_commerces';
  info: {
    displayName: 'OS-RetailAndCommerce';
    pluralName: 'retail-and-commerces';
    singularName: 'retail-and-commerce';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    capabilities: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featuredRetail: Schema.Attribute.JSON;
    formSection: Schema.Attribute.JSON;
    heroSection: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::retail-and-commerce.retail-and-commerce'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    schema: Schema.Attribute.JSON;
    technologyBuild: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::career-path.career-path': ApiCareerPathCareerPath;
      'api::category.category': ApiCategoryCategory;
      'api::course.course': ApiCourseCourse;
      'api::crm-and-sale.crm-and-sale': ApiCrmAndSaleCrmAndSale;
      'api::ed-tech.ed-tech': ApiEdTechEdTech;
      'api::fb-about.fb-about': ApiFbAboutFbAbout;
      'api::fb-advisory.fb-advisory': ApiFbAdvisoryFbAdvisory;
      'api::fb-ai-software.fb-ai-software': ApiFbAiSoftwareFbAiSoftware;
      'api::fb-city.fb-city': ApiFbCityFbCity;
      'api::fb-directory.fb-directory': ApiFbDirectoryFbDirectory;
      'api::fb-fixed-cost-mvp.fb-fixed-cost-mvp': ApiFbFixedCostMvpFbFixedCostMvp;
      'api::fb-for-creator.fb-for-creator': ApiFbForCreatorFbForCreator;
      'api::fb-gtm.fb-gtm': ApiFbGtmFbGtm;
      'api::fb-hipaa.fb-hipaa': ApiFbHipaaFbHipaa;
      'api::fb-home.fb-home': ApiFbHomeFbHome;
      'api::fb-market-validation.fb-market-validation': ApiFbMarketValidationFbMarketValidation;
      'api::fb-performance-marketing.fb-performance-marketing': ApiFbPerformanceMarketingFbPerformanceMarketing;
      'api::fb-product-blueprint.fb-product-blueprint': ApiFbProductBlueprintFbProductBlueprint;
      'api::fb-solo-founder.fb-solo-founder': ApiFbSoloFounderFbSoloFounder;
      'api::foundersbar-author.foundersbar-author': ApiFoundersbarAuthorFoundersbarAuthor;
      'api::foundersbar-blog.foundersbar-blog': ApiFoundersbarBlogFoundersbarBlog;
      'api::foundersbar-case-study-list.foundersbar-case-study-list': ApiFoundersbarCaseStudyListFoundersbarCaseStudyList;
      'api::foundersbar-case-study.foundersbar-case-study': ApiFoundersbarCaseStudyFoundersbarCaseStudy;
      'api::foundersbar-category.foundersbar-category': ApiFoundersbarCategoryFoundersbarCategory;
      'api::foundersbar-home.foundersbar-home': ApiFoundersbarHomeFoundersbarHome;
      'api::foundersbar-site-map.foundersbar-site-map': ApiFoundersbarSiteMapFoundersbarSiteMap;
      'api::global.global': ApiGlobalGlobal;
      'api::header.header': ApiHeaderHeader;
      'api::ib-academy-page.ib-academy-page': ApiIbAcademyPageIbAcademyPage;
      'api::ib-article-page.ib-article-page': ApiIbArticlePageIbArticlePage;
      'api::ib-ats-check-page.ib-ats-check-page': ApiIbAtsCheckPageIbAtsCheckPage;
      'api::ib-course-page.ib-course-page': ApiIbCoursePageIbCoursePage;
      'api::ib-faang-page.ib-faang-page': ApiIbFaangPageIbFaangPage;
      'api::ib-freshser-page.ib-freshser-page': ApiIbFreshserPageIbFreshserPage;
      'api::ib-home-page.ib-home-page': ApiIbHomePageIbHomePage;
      'api::ib-interview-prep-page.ib-interview-prep-page': ApiIbInterviewPrepPageIbInterviewPrepPage;
      'api::ib-interview-prep-professional-page.ib-interview-prep-professional-page': ApiIbInterviewPrepProfessionalPageIbInterviewPrepProfessionalPage;
      'api::ib-pricing-page.ib-pricing-page': ApiIbPricingPageIbPricingPage;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::landing.landing': ApiLandingLanding;
      'api::meta-seo.meta-seo': ApiMetaSeoMetaSeo;
      'api::os-ai-modernization.os-ai-modernization': ApiOsAiModernizationOsAiModernization;
      'api::os-application-modernization.os-application-modernization': ApiOsApplicationModernizationOsApplicationModernization;
      'api::os-build-the-right-product.os-build-the-right-product': ApiOsBuildTheRightProductOsBuildTheRightProduct;
      'api::os-cmmc.os-cmmc': ApiOsCmmcOsCmmc;
      'api::os-compliance.os-compliance': ApiOsComplianceOsCompliance;
      'api::os-construction.os-construction': ApiOsConstructionOsConstruction;
      'api::os-consumer-application.os-consumer-application': ApiOsConsumerApplicationOsConsumerApplication;
      'api::os-data-and-ai.os-data-and-ai': ApiOsDataAndAiOsDataAndAi;
      'api::os-dedicated-team.os-dedicated-team': ApiOsDedicatedTeamOsDedicatedTeam;
      'api::os-delivery-model.os-delivery-model': ApiOsDeliveryModelOsDeliveryModel;
      'api::os-dfar.os-dfar': ApiOsDfarOsDfar;
      'api::os-domain-and-expertise.os-domain-and-expertise': ApiOsDomainAndExpertiseOsDomainAndExpertise;
      'api::os-energetic-ai.os-energetic-ai': ApiOsEnergeticAiOsEnergeticAi;
      'api::os-enterprise-organisation.os-enterprise-organisation': ApiOsEnterpriseOrganisationOsEnterpriseOrganisation;
      'api::os-entertainment-sport.os-entertainment-sport': ApiOsEntertainmentSportOsEntertainmentSport;
      'api::os-fractional-cto.os-fractional-cto': ApiOsFractionalCtoOsFractionalCto;
      'api::os-gx-p.os-gx-p': ApiOsGxPOsGxP;
      'api::os-healthcare.os-healthcare': ApiOsHealthcareOsHealthcare;
      'api::os-hippa.os-hippa': ApiOsHippaOsHippa;
      'api::os-home.os-home': ApiOsHomeOsHome;
      'api::os-industry.os-industry': ApiOsIndustryOsIndustry;
      'api::os-logistics-supply.os-logistics-supply': ApiOsLogisticsSupplyOsLogisticsSupply;
      'api::os-mid-market-business.os-mid-market-business': ApiOsMidMarketBusinessOsMidMarketBusiness;
      'api::os-ml-ops-and-devop.os-ml-ops-and-devop': ApiOsMlOpsAndDevopOsMlOpsAndDevop;
      'api::os-nist-800.os-nist-800': ApiOsNist800OsNist800;
      'api::os-operation-support.os-operation-support': ApiOsOperationSupportOsOperationSupport;
      'api::os-product-development.os-product-development': ApiOsProductDevelopmentOsProductDevelopment;
      'api::os-product-engineering.os-product-engineering': ApiOsProductEngineeringOsProductEngineering;
      'api::os-quality-engineering.os-quality-engineering': ApiOsQualityEngineeringOsQualityEngineering;
      'api::os-soc-2.os-soc-2': ApiOsSoc2OsSoc2;
      'api::os-software-development.os-software-development': ApiOsSoftwareDevelopmentOsSoftwareDevelopment;
      'api::os-staff-augmentation.os-staff-augmentation': ApiOsStaffAugmentationOsStaffAugmentation;
      'api::os-startups-via-foundersbar.os-startups-via-foundersbar': ApiOsStartupsViaFoundersbarOsStartupsViaFoundersbar;
      'api::os-strategy-consulting.os-strategy-consulting': ApiOsStrategyConsultingOsStrategyConsulting;
      'api::os-talent-solution.os-talent-solution': ApiOsTalentSolutionOsTalentSolution;
      'api::os-workforce-management.os-workforce-management': ApiOsWorkforceManagementOsWorkforceManagement;
      'api::os-zero-trust.os-zero-trust': ApiOsZeroTrustOsZeroTrust;
      'api::retail-and-commerce.retail-and-commerce': ApiRetailAndCommerceRetailAndCommerce;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
