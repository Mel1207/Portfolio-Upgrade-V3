export default {
    name: "design",
    title: "Design",
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
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "link",
            type: "url"
        },
    ]
}