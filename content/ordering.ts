// Section -> Chapter -> Module

export type SectionID =
  | 'general'
  | 'silver';

export type Chapter = {
  name: string;
  items: string[];
  description?: string;
};

const MODULE_ORDERING: { [key in SectionID]: Chapter[] } = {
  general: [
    {
      name: 'Getting Started',
      description: "Start here if you're new to competitive programming.",
      items: [
        'using-this-guide',
        'intro-cp',
        'choosing-lang',
        'resources-learning-to-code',
        'running-code-online',
        'data-types',
        'input-output',
        'expected-knowledge',
      ],
    },
    {
      name: 'Contributing',
      description: 'How you can add content to the guide.',
      items: ['contributing', 'adding-solution', 'modules', 'working-mdx'],
    }
  ],
  silver: [
    {
      name: 'Prefix Sums',
      items: ['prefix-sums', 'more-prefix-sums'],
    },
    {
      name: 'Visual',
      items: ['visual'],
    }
  ]
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(
  MODULE_ORDERING
) as SectionID[];
export const SECTION_LABELS: { [key in SectionID]: string } = {
  general: 'General',
  silver: 'Silver'
};
export const SECTION_SEO_DESCRIPTION: { [key in SectionID]: string } = {
  general:
    'General information for USACO and Competitive Programming. Includes resources to pick a language, set up an IDE, practice tips, and more!',
  silver:
    'Topics for USACO Silver include binary search on the answer, prefix sums, two pointers, dfs, floodfill, trees, custom comparators, greedy with sorting, and more!'
};
export const SECTION_SEO_TITLES: { [key in SectionID]: string } = {
  general: 'General USACO Information',
  silver: 'USACO Silver Topics'
};

const moduleIDToSectionMap: { [key: string]: SectionID } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    });
  });
});

export { moduleIDToSectionMap };
export { moduleIDToURLMap };

const moduleIDToURLMap: { [key: string]: string } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToURLMap[moduleID] = `/${section}/${moduleID}`;
    });
  });
});
