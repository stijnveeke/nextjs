"use client";
import React from "react";
import { ContentToHtml } from "./ContentToHtml";
import { HeaderTitle } from "./HeaderTitle";

export default function HeaderWithText({
  title,
  asH1,
  content,
}: IIntroduction | ISupervision) {
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <HeaderTitle asH1={asH1}>{title}</HeaderTitle>

      <ContentToHtml content={content} />
    </div>
  );
}
