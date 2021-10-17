export default {
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "text"
        }, 
        // {
        //     name: 'mainImage',
        //     title: 'Main image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        // },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "tutorial", title: "Study"},
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                { type: "string" },
            ],
            options: {
                layout: "tags"
            }
        }
    ]
}