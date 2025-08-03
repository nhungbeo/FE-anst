import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  FiImage, 
  FiLink, 
  FiUpload, 
  FiX, 
  FiCheck, 
  FiRefreshCw,
  FiEye,
  FiSettings
} from 'react-icons/fi';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import './background-customizer.css';

const BackgroundCustomizer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('upload');
  const [imageUrl, setImageUrl] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Predefined background options
  const predefinedBackgrounds = [
    {
      id: 'study1',
      name: 'Study Desk',
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
      category: 'study'
    },
    {
      id: 'nature1',
      name: 'Mountain View',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      category: 'nature'
    },
    {
      id: 'abstract1',
      name: 'Abstract Blue',
      url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=600&fit=crop',
      category: 'abstract'
    },
    {
      id: 'library1',
      name: 'Library',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
      category: 'study'
    },
    {
      id: 'workspace1',
      name: 'Modern Workspace',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
      category: 'study'
    },
    {
      id: 'gradient1',
      name: 'Purple Gradient',
      url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=600&fit=crop',
      category: 'abstract'
    }
  ];

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleUrlSubmit = () => {
    if (imageUrl.trim()) {
      setIsLoading(true);
      // Test if URL is valid image
      const img = new Image();
      img.onload = () => {
        setPreviewImage(imageUrl);
        setIsLoading(false);
      };
      img.onerror = () => {
        alert('Invalid image URL. Please check the link.');
        setIsLoading(false);
      };
      img.src = imageUrl;
    }
  };

  const handleApplyBackground = () => {
    if (previewImage) {
      // Dispatch action to update background
      // This would need to be implemented in your Redux store
      console.log('Applying background:', previewImage);
      
      // Apply to body or specific element
      document.body.style.backgroundImage = `url(${previewImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      
      onClose();
    }
  };

  const handlePredefinedSelect = (background) => {
    setPreviewImage(background.url);
  };

  const resetBackground = () => {
    setPreviewImage('');
    setImageUrl('');
    document.body.style.backgroundImage = '';
    document.body.style.background = 'var(--color-background)';
  };

  if (!isOpen) return null;

  return (
    <div className="background-customizer-overlay">
      <div className="background-customizer-modal">
        <div className="modal-header">
          <h2><FiImage /> Customize Background</h2>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <FiUpload /> Upload Image
          </button>
          <button 
            className={`tab-btn ${activeTab === 'url' ? 'active' : ''}`}
            onClick={() => setActiveTab('url')}
          >
            <FiLink /> Image URL
          </button>
          <button 
            className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <FiImage /> Gallery
          </button>
        </div>

        <div className="modal-content">
          {activeTab === 'upload' && (
            <div className="upload-section">
              <div 
                className={`upload-area ${dragOver ? 'drag-over' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
              >
                <AiOutlineCloudUpload size={48} />
                <h3>Drop image here or click to browse</h3>
                <p>Supports JPG, PNG, GIF up to 10MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="url-section">
              <div className="url-input-group">
                <input
                  type="url"
                  placeholder="Enter image URL (https://...)"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="url-input"
                />
                <button 
                  className="url-submit-btn"
                  onClick={handleUrlSubmit}
                  disabled={!imageUrl.trim() || isLoading}
                >
                  {isLoading ? <FiRefreshCw className="spinning" /> : <FiCheck />}
                </button>
              </div>
              <div className="url-tips">
                <h4>💡 Tips for best results:</h4>
                <ul>
                  <li>Use high-resolution images (1920x1080 or higher)</li>
                  <li>Try Unsplash.com for free high-quality images</li>
                  <li>Make sure the URL ends with .jpg, .png, or .gif</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="gallery-section">
              <div className="gallery-grid">
                {predefinedBackgrounds.map((bg) => (
                  <div 
                    key={bg.id}
                    className={`gallery-item ${previewImage === bg.url ? 'selected' : ''}`}
                    onClick={() => handlePredefinedSelect(bg)}
                  >
                    <img src={bg.url} alt={bg.name} />
                    <div className="gallery-overlay">
                      <span>{bg.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {previewImage && (
            <div className="preview-section">
              <h3><FiEye /> Preview</h3>
              <div className="preview-container">
                <img src={previewImage} alt="Background Preview" />
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="reset-btn" onClick={resetBackground}>
            <FiRefreshCw /> Reset to Default
          </button>
          <div className="action-buttons">
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button 
              className="apply-btn"
              onClick={handleApplyBackground}
              disabled={!previewImage}
            >
              <FiCheck /> Apply Background
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCustomizer;