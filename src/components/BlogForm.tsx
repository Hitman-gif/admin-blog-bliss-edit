
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X, Plus } from 'lucide-react';
import { CreateBlogData, BlogContent, Blog } from '../types/blog';
import { toast } from 'sonner';

interface BlogFormProps {
  blog?: Blog;
  onSubmit: (data: CreateBlogData) => Promise<void>;
  onCancel: () => void;
  mode: 'create' | 'edit';
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, onSubmit, onCancel, mode }) => {
  const [formData, setFormData] = useState<CreateBlogData>({
    category: '',
    title: '',
    subtext: '',
    description: '',
    bannerImage: null,
    content: [{ title: '', description: '' }]
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (blog && mode === 'edit') {
      setFormData({
        category: blog.category,
        title: blog.title,
        subtext: blog.subtext,
        description: blog.description,
        bannerImage: null,
        content: blog.content
      });
      setImagePreview(blog.bannerImage);
    }
  }, [blog, mode]);

  const handleInputChange = (field: keyof CreateBlogData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, bannerImage: file }));
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (index: number, field: keyof BlogContent, value: string) => {
    const newContent = [...formData.content];
    newContent[index] = { ...newContent[index], [field]: value };
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  const addContentSection = () => {
    setFormData(prev => ({
      ...prev,
      content: [...prev.content, { title: '', description: '' }]
    }));
  };

  const removeContentSection = (index: number) => {
    if (formData.content.length > 1) {
      setFormData(prev => ({
        ...prev,
        content: prev.content.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(formData);
      onCancel();
    } catch (error) {
      toast.error('Failed to save blog. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {mode === 'create' ? 'Create New Blog' : 'Edit Blog'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Blog Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="Categoryblg">Category</Label>
                <Input
                  id="Categoryblg"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  placeholder="Enter category"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="Titleblg">Title</Label>
                <Input
                  id="Titleblg"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter blog title"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="Subtext">Subtext</Label>
              <Input
                id="Subtext"
                value={formData.subtext}
                onChange={(e) => handleInputChange('subtext', e.target.value)}
                placeholder="Enter subtext"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="Descriptionblg">Description</Label>
              <Textarea
                id="Descriptionblg"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Enter blog description"
                rows={4}
                required
              />
            </div>

            {/* Banner Image Upload */}
            <div className="space-y-2">
              <Label>Banner Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full h-48 object-cover mx-auto rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setImagePreview('');
                        setFormData(prev => ({ ...prev, bannerImage: null }));
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-lg font-medium">
                      {mode === 'edit' ? 'Change Banner Image' : 'Upload Banner Image'}
                    </p>
                    <p className="text-sm text-gray-500">Click to select an image</p>
                  </div>
                )}
                <input
                  id="BannerImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-lg font-semibold">Content Sections</Label>
                <Button
                  type="button"
                  onClick={addContentSection}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Section
                </Button>
              </div>

              {formData.content.map((content, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Section {index + 1}</h4>
                      {formData.content.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeContentSection(index)}
                          variant="ghost"
                          size="sm"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`TitleContent${index}`}>Content Title</Label>
                        <Input
                          id={`TitleContent${index}`}
                          value={content.title}
                          onChange={(e) => handleContentChange(index, 'title', e.target.value)}
                          placeholder="Enter content title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`DescriptionContent${index}`}>Content Description</Label>
                        <Textarea
                          id={`DescriptionContent${index}`}
                          value={content.description}
                          onChange={(e) => handleContentChange(index, 'description', e.target.value)}
                          placeholder="Enter content description"
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                className="bg-black hover:bg-slate-800 text-white px-8"
                disabled={isLoading}
              >
                {isLoading 
                  ? (mode === 'create' ? 'Saving...' : 'Updating...') 
                  : (mode === 'create' ? 'Save' : 'Update')
                }
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogForm;
