export const image = `
    altText,
    asset {
        _ref
    }
`;

export const video = `
    format,
    public_id
`;

export const media = `
media {
    type,
    image {
        ${image}
    },
    video {
        ${video}
    },
}
`;
