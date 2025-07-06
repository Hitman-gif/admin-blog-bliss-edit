
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onEdit, onDelete }) => {
  return (
    <Card className="cursor-pointer bg-[#F2EEEA] hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        {blog.bannerImage && (
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">{blog.category}</p>
            <p className="text-2xl font-medium mb-2">{blog.title}</p>
            <p className="text-gray-700 mb-3">{blog.subtext}</p>
            <p className="text-sm text-gray-600 line-clamp-3">{blog.description}</p>
          </div>
          <div className="flex gap-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(blog);
              }}
              className="hover:bg-gray-200"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(blog.id);
              }}
              className="hover:bg-red-100 text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {blog.content.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <p className="text-sm font-medium text-gray-800 mb-1">
              {blog.content[0].title}
            </p>
            <p className="text-xs text-gray-600 line-clamp-2">
              {blog.content[0].description}
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>Created: {blog.createdAt.toLocaleDateString()}</span>
          <span>Updated: {blog.updatedAt.toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
