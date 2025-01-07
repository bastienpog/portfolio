import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

const DetailModal = ({ 
  isOpen, 
  onClose, 
  title, 
  company, 
  location, 
  date, 
  details 
}) => {

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />
      

      <div className="relative z-50 bg-custom-darkgreen rounded-xl max-w-md w-full mx-4 p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-custom-green text-xl font-medium">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subheader */}
        <div className="text-sm text-gray-400 mb-6">
          {company}
          {location && <span>, {location}</span>}
          {date && <div>{date}</div>}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {details?.map((detail, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-custom-green mt-1 flex-shrink-0" />
              <span className="text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;