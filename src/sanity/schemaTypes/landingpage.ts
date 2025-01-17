export default {
    title: 'Landingpage',
    name: 'landingpage',
    type: 'document',
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of:[
                {type:'hero'},
                {type:'productsection'},
                // {type:'popularsections'},
            ]
        },
      
    ],
}




// const arrays: string[] = 