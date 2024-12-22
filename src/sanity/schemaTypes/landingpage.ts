export default {
    title: 'Landingpage',
    name: 'landingpage',
    type: 'document',
    fields: [
        {
            title: 'page Section',
            name: 'sections',
            type: 'array',
            of:[
                {type:'hero'},
                {type:'productsection'},
            ]
        },
      
    ],
}