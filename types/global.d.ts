import EComponentOptions from "../enums/EComponentOptions";

export {};

declare global {
  interface ISiteSection {
    id: string;
    title: string;
    asH1?: boolean;
    component:
      | string
      | Array<{
          variant: string;
          component: string;
          componentVariant: string = "default";
          options?: Array<EComponentOptions>;
        }>;
  }

  interface IComponentSection {
    variant: string;
  }

  interface IContactForm extends ISiteSection, IComponentSection {}

  interface ICarouselWithCaption extends ISiteSection, IComponentSection {
    cards: Array<{
      objectPosition: {
        base?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      imageUrl: string;
      imageAlt: string;
      marginTop?: {
        base?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      marginLeft?: {
        base?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
    }>;
  }

  interface IIntroduction extends ISiteSection, IComponentSection {
    content: string;
    contentUrl: string;
  }

  interface ISupervision extends ISiteSection, IComponentSection {
    content: string;
    contentUrl: string;
  }

  interface IAbout extends ISiteSection, IComponentSection {
    content: string;
    contentUrl: string;
    images: Array<{
      path: string;
      alt: string;
    }>;
  }

  interface IServices extends ISiteSection, IComponentSection {
    items: Array<{
      id: string;
      title: string;
      content: string;
      contentUrl: string;
      price: string;
    }>;
    options: EComponentOptions[];
  }

  interface IColleagues extends ISiteSection, IComponentSection {
    items: Array<{
      id: string;
      title: string;
      content: Array<{
        name: string;
        content: string;
        contentUrl: string;
        image: {
          path: string;
          alt: string;
        };
      }>;
    }>;
    options: EComponentOptions[];
  }

  interface IColor {
    colorName: string;
    colorCode: string;
  }

  interface INavbar {
    logo: {
      path: string;
      alt: string;
    };
    styles?: {
      base: any;
      navItems?: any;
      socialLinks?: any;
    };
    _hover?: {
      navItems?: any;
      socialLinks?: any;
    };
    _focus?: {
      bg: string;
      color: string;
    };
    _active?: {
      bg: string;
      color: string;
    };
    navItems: Array<{
      label: string;
      scrollId: string;
      children: Array<{
        label: string;
        subLabel: string;
        scrollId: string;
      }>;
    }>;
    socialLinks: Array<{
      icon: string;
      linkOptions: {
        href: string;
        target?: string;
      };
    }>;
  }
}
