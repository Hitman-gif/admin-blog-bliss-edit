
export interface BlogContent {
  title: string;
  description: string;
}

export interface Blog {
  id: string;
  category: string;
  title: string;
  subtext: string;
  description: string;
  bannerImage: string;
  content: BlogContent[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBlogData {
  category: string;
  title: string;
  subtext: string;
  description: string;
  bannerImage: File | null;
  content: BlogContent[];
}
