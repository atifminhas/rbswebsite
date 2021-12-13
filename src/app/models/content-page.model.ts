export class Resource {
    Id: Number;
    Key: String;
    Value: String;
}

export class NavigationMenu {
    Id?: Number;
    TypeId: Number;
    Position: Number;
    Slug: String;
    MenuTitle: String;
    Title: String;
    Content: String;
    Picture: String;
    HasChildren: Boolean;
    SubMenu: [NavigationMenu]
}

export class ContentPage {
    Id?: Number;
    ParentId?: Number;
    Position: Number;
    TypeId: Number;
    Slug: String;
    MenuTitle: String;
    Title: String;
    Content: String;
    Picture: String;

    constructor(id?: Number, 
        parentId?: Number, 
        position?: Number,
        typeId?: Number, 
        slug?: String, 
        menuTitle?: String, 
        title?: String, 
        content?: String, 
        picture?: String) {
        
            if (id !== undefined)
                this.Id = id;    
            if (parentId !== undefined)
                this.ParentId = parentId;    
            if (position !== undefined)
                this.Position = position;    
            if (typeId !== undefined)
                this.TypeId = typeId;
            if (slug !== undefined)
                this.Slug = slug;
            if (menuTitle !== undefined)
                this.MenuTitle = menuTitle;        
            if (title !== undefined)
                this.Title = title;        
            if (content !== undefined)
                this.Content = content;        
            if (picture !== undefined)
                this.Picture = picture;
                
    }
}

export class HomePage {
    Title: String;
    Content: String;
    Picture: String;
    
    Section1Title: String;
    Section1Content: String;
    Section1Picture: String;
    
    Section2Title: String;
    Section2Content: String;
    Section2Picture: String;

    Section3Title: String;
    Section3Content: String;
    Section3Picture: String;

    Section4Title: String;
    Section4Content: String;
    Section4Picture: String;

    Section5Title: String;
    Section5Content: String;
    Section5Picture: String;

    Section6Title: String;
    Section6Content: String;
    Section6Picture: String;
}

export class AboutUsPage {
    Title: String;
    Content: String;
    Picture: String;
    
    Section1Title: String;
    Section1Content: String;
    Section1Picture: String;
    
    Section2Title: String;
    Section2Content: String;
    Section2Picture: String;

    Section3Title: String;
    Section3Content: String;
    Section3Picture: String;

    Section4Title: String;
    Section4Content: String;
    Section4Picture: String;
    Section4VideoThumb: String;
    Section4VideoURL: String;
}

export class ContactUsPage {
    Title: String;
    Content: String;
    Picture: String;
    
    Section1Title: String;
    Section1Content: String;
    Section1Picture: String;
}

export class CareersPage {
    Title: String;
    Content: String;
    Picture: String;
}

export class Banner {
    Title: String;
    Detail: String;
    Picture: String;
    Link: String;
    Accreditations: Accreditation[];
}

export class Accreditation {
    Title: String;
    Picture: String;
    Link: String;
}