import React from "react";
import { getColors, getColorCode } from "../../lib/Colors";
import getSiteSections from "../../lib/getSiteSections";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import EComponentOptions from "../../enums/EComponentOptions";
import getContents from "../../lib/getContents";

const variant = "variant4";
export default async function Page() {
  const sections = await getSiteSections();
  const contents = await getContents();

  const getContent = (contentUrl: string) => {
    const content = contents.find(
      (c) => c.contentFile === contentUrl.split("/")[1]
    );

    if (content) {
      return content.content;
    }
    return "";
  };

  const getComponent = (
    component:
      | string
      | Array<{
          component: string;
          variant: string;
          componentVariant: string;
          options?: Array<EComponentOptions>;
        }>,
    variant: string
  ) => {
    if (typeof component === "string") {
      return { component: component, componentVariant: "default", options: [] };
    } else {
      const comp = component.find((value) => {
        return value.variant === variant;
      });

      if (!comp) {
        return {
          component: component[0].component,
          componentVariant: "default",
          options: component[0].options,
        };
      }

      return {
        component: comp.component ?? component[0].component,
        componentVariant: comp.componentVariant ?? "default",
        options: comp.options ?? [],
      };
    }
  };

  if (!sections) return <div>Loading...</div>;
  const items = sections.map((section) => {
    const comp = getComponent(section.component, variant);
    const Component = React.lazy(
      () => import(`../../components/${comp.component}`)
    );
    return (
      <React.Suspense fallback={<div>Loading...</div>} key={section.id}>
        <div
          className="mt-4 mx-1"
          style={{
            scrollMarginTop: "100px",
          }}
          id={section.id}
        >
          <Component
            {...section}
            variant={comp.componentVariant}
            options={comp.options}
            {...((section as any).contentUrl && {
              content: getContent((section as any).contentUrl),
            })}
          />
        </div>
      </React.Suspense>
    );
  });

  return <div>{items}</div>;
}
