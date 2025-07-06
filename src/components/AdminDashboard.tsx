
import React, { useState } from 'react';
import { useBlog } from '../contexts/BlogContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import BlogCard from './BlogCard';
import BlogForm from './BlogForm';
import { Blog, CreateBlogData } from '../types/blog';
import { toast } from 'sonner';

const AdminDashboard: React.FC = () => {
  const { blogs, createBlog, updateBlog, deleteBlog, searchBlogs } = useBlog();
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedBlogs, setDisplayedBlogs] = useState<Blog[]>([]);

  React.useEffect(() => {
    if (searchQuery.trim()) {
      setDisplayedBlogs(searchBlogs(searchQuery));
    } else {
      setDisplayedBlogs(blogs);
    }
  }, [blogs, searchQuery, searchBlogs]);

  const handleCreateBlog = () => {
    setEditingBlog(undefined);
    setShowForm(true);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteBlog(id);
      toast.success('Blog deleted successfully!');
    }
  };

  const handleFormSubmit = async (data: CreateBlogData) => {
    if (editingBlog) {
      await updateBlog(editingBlog.id, data);
    } else {
      await createBlog(data);
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingBlog(undefined);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (showForm) {
    return (
      <BlogForm
        blog={editingBlog}
        onSubmit={handleFormSubmit}
        onCancel={handleCancelForm}
        mode={editingBlog ? 'edit' : 'create'}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">Create, edit, and manage your blog posts</p>
        </div>
        <Button
          onClick={handleCreateBlog}
          className="text-lg px-6 py-3 bg-black cursor-pointer flex justify-between items-center text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Blog
        </Button>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 h-12"
          />
        </div>
      </div>

      {/* Blogs Grid */}
      {displayedBlogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-4">
            {searchQuery ? 'No blogs found matching your search.' : 'No blogs created yet.'}
          </div>
          {!searchQuery && (
            <Button onClick={handleCreateBlog} variant="outline">
              Create your first blog
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEditBlog}
              onDelete={handleDeleteBlog}
            />
          ))}
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{blogs.length}</div>
            <div className="text-sm text-gray-600">Total Blogs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {new Set(blogs.map(b => b.category)).size}
            </div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {searchQuery ? displayedBlogs.length : blogs.length}
            </div>
            <div className="text-sm text-gray-600">
              {searchQuery ? 'Search Results' : 'Published'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
