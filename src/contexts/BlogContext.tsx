
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Blog, CreateBlogData } from '../types/blog';

interface BlogContextType {
  blogs: Blog[];
  createBlog: (blogData: CreateBlogData) => Promise<void>;
  updateBlog: (id: string, blogData: Partial<CreateBlogData>) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  searchBlogs: (query: string) => Blog[];
  getBlogById: (id: string) => Blog | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const createBlog = async (blogData: CreateBlogData): Promise<void> => {
    console.log('Creating blog:', blogData);
    
    const newBlog: Blog = {
      id: Date.now().toString(),
      category: blogData.category,
      title: blogData.title,
      subtext: blogData.subtext,
      description: blogData.description,
      bannerImage: blogData.bannerImage ? URL.createObjectURL(blogData.bannerImage) : '',
      content: blogData.content,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setBlogs(prev => [...prev, newBlog]);
    
    // Simulate API success
    setTimeout(() => {
      alert('Blog created successfully!');
    }, 500);
  };

  const updateBlog = async (id: string, blogData: Partial<CreateBlogData>): Promise<void> => {
    console.log('Updating blog:', id, blogData);
    
    setBlogs(prev => prev.map(blog => {
      if (blog.id === id) {
        return {
          ...blog,
          ...blogData,
          bannerImage: blogData.bannerImage ? URL.createObjectURL(blogData.bannerImage) : blog.bannerImage,
          updatedAt: new Date()
        };
      }
      return blog;
    }));

    // Simulate API success
    setTimeout(() => {
      alert('Blog updated successfully!');
    }, 500);
  };

  const deleteBlog = async (id: string): Promise<void> => {
    console.log('Deleting blog:', id);
    setBlogs(prev => prev.filter(blog => blog.id !== id));
  };

  const searchBlogs = (query: string): Blog[] => {
    if (!query.trim()) return blogs;
    
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.category.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getBlogById = (id: string): Blog | undefined => {
    return blogs.find(blog => blog.id === id);
  };

  return (
    <BlogContext.Provider value={{
      blogs,
      createBlog,
      updateBlog,
      deleteBlog,
      searchBlogs,
      getBlogById
    }}>
      {children}
    </BlogContext.Provider>
  );
};
