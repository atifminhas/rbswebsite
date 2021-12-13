export class Gallery {
    Id?: Number;
    Slug: String;
    Title: String;
    Picture: String;
    GalleryPictures: Picture[];
}

export class Picture {
    Id?: Number;
    Slug: String;
    Title: String;
    Picture: String;
}