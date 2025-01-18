export const Popular =  {
    title: "popular products",
    name: " popularsections",
    type: "object",
    fields: [
        {
            title: "popular Headinng",
            name: "popularheading",
            type: "string",
        },
        {
           title: "card section",
            name: "popularcards",
            type: "array",
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
        },
    ],
}