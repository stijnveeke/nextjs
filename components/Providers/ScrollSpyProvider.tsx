"use client";
import React, { createContext } from "react";

export const ScrollSpyContext = createContext<{
  activeSection: string;
  createSection: (id: string) => {
    id: string;
    ref: React.RefObject<HTMLDivElement>;
  };
  sections: Array<{
    id: string;
    ref: React.RefObject<HTMLDivElement>;
  }>;
}>({
  activeSection: "",
  createSection: (id: string) => {
    return {
      id: id,
      ref: React.createRef<HTMLDivElement>(),
    };
  },
  sections: [],
});

export class ScrollSpyProvider extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    activeSection: string;
    sections: Array<any>;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeSection: "",
      sections: [],
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    const { sections, activeSection } = this.state as {
      activeSection: string;
      sections: Array<{
        id: string;
        ref: React.RefObject<HTMLDivElement>;
      }>;
    };
    const scrollPosition = window.scrollY;
    const newActiveSection = sections.find(({ ref }) => {
      const element = ref.current;
      if (element) {
        const { offsetTop, offsetHeight } = element;
        return (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        );
      }
    });
    if (newActiveSection) {
      if (newActiveSection.id === activeSection) return;
      this.setState({ activeSection: newActiveSection.id });
    }
  };

  render() {
    const { children } = this.props;
    const { activeSection, sections } = this.state;
    const createSection = (id: string) => {
      const ref = React.createRef<HTMLDivElement>();
      if (sections.find((section) => section.id === id)) {
        const section = sections.find((section) => section.id === id);
        return section;
      }
      this.setState({
        sections: [
          ...sections,
          {
            id: id,
            ref: ref,
          },
        ],
      });
      return {
        id: id,
        ref: ref,
      };
    };
    return (
      <ScrollSpyContext.Provider
        value={{ activeSection, createSection, sections }}
      >
        {children}
      </ScrollSpyContext.Provider>
    );
  }
}
