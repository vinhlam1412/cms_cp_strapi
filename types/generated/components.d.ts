import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsArchivement extends Struct.ComponentSchema {
  collectionName: 'components_components_archivements';
  info: {
    displayName: 'Archivement';
  };
  attributes: {
    subject: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'CaseStudy';
  };
  attributes: {
    Challenge: Schema.Attribute.Text;
    client: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    Result: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsClientLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_client_logos';
  info: {
    displayName: 'ClientLogo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    ctaViewDetail: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    featureItem: Schema.Attribute.Component<'components.feature-detail', true>;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureDetail extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_details';
  info: {
    displayName: 'FeatureDetail';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    banner: Schema.Attribute.Component<'shared.banner', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface ComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsMap extends Struct.ComponentSchema {
  collectionName: 'components_components_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    mapPicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ComponentsMember extends Struct.ComponentSchema {
  collectionName: 'components_components_members';
  info: {
    displayName: 'Member';
  };
  attributes: {
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    profilePicture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ComponentsOur extends Struct.ComponentSchema {
  collectionName: 'components_components_ours';
  info: {
    displayName: 'Our';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    serviceCard: Schema.Attribute.Component<'components.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_components_service_cards';
  info: {
    displayName: 'ServiceCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSolution extends Struct.ComponentSchema {
  collectionName: 'components_components_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    name: Schema.Attribute.String;
    solutonDetail: Schema.Attribute.Component<
      'components.solution-detail',
      true
    >;
  };
}

export interface ComponentsSolutionDetail extends Struct.ComponentSchema {
  collectionName: 'components_components_solution_details';
  info: {
    displayName: 'SolutionDetail';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface ComponentsVirtualElement extends Struct.ComponentSchema {
  collectionName: 'components_components_virtual_elements';
  info: {
    displayName: 'virtualElement';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentsWhatWeDoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_what_we_do_cards';
  info: {
    displayName: 'WhatWeDoCard';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    ctaButton: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutEmail extends Struct.ComponentSchema {
  collectionName: 'components_layout_emails';
  info: {
    displayName: 'Email';
  };
  attributes: {
    email: Schema.Attribute.Email;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutOffice extends Struct.ComponentSchema {
  collectionName: 'components_layout_offices';
  info: {
    displayName: 'Office';
  };
  attributes: {
    address: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_layout_phone_numbers';
  info: {
    displayName: 'PhoneNumber';
  };
  attributes: {
    numbers: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_section_case_study_sections';
  info: {
    displayName: 'CaseStudy Section';
  };
  attributes: {
    caseStudy: Schema.Attribute.Component<'components.case-study', true>;
    ctaRead: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionClientSection extends Struct.ComponentSchema {
  collectionName: 'components_section_client_sections';
  info: {
    displayName: 'Client Section';
    icon: 'heart';
  };
  attributes: {
    clientLogo: Schema.Attribute.Component<'components.client-logo', true>;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
  };
}

export interface SectionGrowthArchivement extends Struct.ComponentSchema {
  collectionName: 'components_section_growth_archivements';
  info: {
    displayName: 'GrowthArchivement';
  };
  attributes: {
    archivement: Schema.Attribute.Component<'components.archivement', true>;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
  };
}

export interface SectionGrowthDriven extends Struct.ComponentSchema {
  collectionName: 'components_section_growth_drivens';
  info: {
    displayName: 'Growth Driven';
  };
  attributes: {
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    Solution: Schema.Attribute.Component<'components.solution', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionIntro extends Struct.ComponentSchema {
  collectionName: 'components_section_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    content: Schema.Attribute.Text;
    service1: Schema.Attribute.String;
    service2: Schema.Attribute.String;
    service3: Schema.Attribute.String;
    service4: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionMemberSection extends Struct.ComponentSchema {
  collectionName: 'components_section_member_sections';
  info: {
    displayName: 'MemberSection';
  };
  attributes: {
    members: Schema.Attribute.Component<'components.member', true>;
  };
}

export interface SectionOurSection extends Struct.ComponentSchema {
  collectionName: 'components_section_our_sections';
  info: {
    displayName: 'OurSection';
  };
  attributes: {
    ours: Schema.Attribute.Component<'components.our', true>;
  };
}

export interface SectionServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_section_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_section_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
  };
  attributes: {
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    whatWheDoCard: Schema.Attribute.Component<
      'components.what-we-do-card',
      true
    >;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    IsImage: Schema.Attribute.Boolean;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    primaryCTA: Schema.Attribute.Component<'shared.link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.archivement': ComponentsArchivement;
      'components.case-study': ComponentsCaseStudy;
      'components.client-logo': ComponentsClientLogo;
      'components.feature': ComponentsFeature;
      'components.feature-detail': ComponentsFeatureDetail;
      'components.hero': ComponentsHero;
      'components.image': ComponentsImage;
      'components.map': ComponentsMap;
      'components.member': ComponentsMember;
      'components.our': ComponentsOur;
      'components.service': ComponentsService;
      'components.service-card': ComponentsServiceCard;
      'components.solution': ComponentsSolution;
      'components.solution-detail': ComponentsSolutionDetail;
      'components.testimonials': ComponentsTestimonials;
      'components.virtual-element': ComponentsVirtualElement;
      'components.what-we-do-card': ComponentsWhatWeDoCard;
      'layout.email': LayoutEmail;
      'layout.header': LayoutHeader;
      'layout.office': LayoutOffice;
      'layout.phone-number': LayoutPhoneNumber;
      'section.case-study-section': SectionCaseStudySection;
      'section.client-section': SectionClientSection;
      'section.growth-archivement': SectionGrowthArchivement;
      'section.growth-driven': SectionGrowthDriven;
      'section.intro': SectionIntro;
      'section.member-section': SectionMemberSection;
      'section.our-section': SectionOurSection;
      'section.service-section': SectionServiceSection;
      'section.what-we-do': SectionWhatWeDo;
      'shared.banner': SharedBanner;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
