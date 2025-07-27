export interface InstructorModel {
    description: string;
    has_instructor_page: boolean;
    image: string;
    name: string;
    short_description: string;
    slug: string;
}

export interface FeatureModel {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
}

export interface PointerModel {
    color: string;
    icon: string;
    id: string;
    text: string;
}

export interface AboutItemModel {
    id: string;
    icon: string;
    title: string | TrustedHTML;
    description: string | TrustedHTML;
}

export interface FeatureExplanationModel {
    id: string;
    title: string;
    file_type: string;
    file_url: string;
    video_thumbnail: string;
    checklist: string[];
}

export interface TrailerModel {
    name: string;
    resource_type: 'video' | 'image';
    resource_value: string;
    thumbnail_url: string;
}

export interface CheckListModel {
    color: string;
    icon: string;
    id: string;
    text: string;
    list_page_visibility: boolean;
}

