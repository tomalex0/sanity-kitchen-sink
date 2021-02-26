export default {
  widgets: [
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
                  buildHookId: '60395edcd0023227a3098b2f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m51m37k5',
                  apiId: 'd6f88961-c3cf-4894-8dee-72c7239ccf76'
                },
                {
                  buildHookId: '60395edc0a7d9c2af9f70e7f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8qxpah2e',
                  apiId: '62b856e0-a2f5-4879-b15e-dd00ce61ac04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomalex0/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8qxpah2e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
