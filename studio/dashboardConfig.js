export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a9c221f8e7c23924177f06',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7ogtxa7s',
                  apiId: 'e3c03595-0d80-42fe-98b7-6e30f2655812'
                },
                {
                  buildHookId: '60a9c22181eda969537cc841',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f7es6j9g',
                  apiId: 'ad570ac3-7c60-4873-84de-6630d45ef0bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vitorflg-draft/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f7es6j9g.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
