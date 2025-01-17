
export default {

    title:'product section',
    name:'productsection',
    type:'object',
    fields:[
        
        //ak dafa use heading
        {
            title:"product heading",
            name:"productHeading",
            type:"string"

        },

        //bar bar use cards in pictures
        {
            title:'card sections',
            name:'cards',
            type:'array',
            of:[
                {
                    type:'object',
                    fields:[
                        
                  {title:'Image', name:'image', type:'image'},
                  {title:'Heading', name:'heading', type:'string'},
                  {title:'Price', name:'price', type:'number'},                  
                 
                    ]
                }


                
            ]
        }
    ]
}