import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kenzo Johnson",
  EMAIL: "ripeness0640@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "home",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "My ramblings",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "where i worked",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "what im be working on",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/KenzoJ"
  }
]
