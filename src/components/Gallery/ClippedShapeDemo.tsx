import React from 'react';
import ClippedShapeGallery from '../ui/clipped-shape-image';

const ClippedShapeGalleryDemo: React.FC = () => {
  const customMediaItems = [
    {
      src: 'https://images.unsplash.com/photo-1542831371-d68a9840f368?w=500&auto=format&fit=crop',
      alt: 'Code on screen',
      clipId: 'clip-another1' as const,
      type: 'image' as const,
    },
    {
      src: 'https://videos.pexels.com/video-files/5267499/5267499-hd_1920_1080_25fps.mp4',
      alt: 'Cityscape drone footage',
      clipId: 'clip-another2' as const,
      type: 'video' as const,
    },
    {
      src: 'https://images.unsplash.com/photo-1522075782449-654817478051?w=500&auto=format&fit=crop',
      alt: 'Person working at desk',
      clipId: 'clip-another3' as const,
      type: 'image' as const,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-zinc-900 min-h-[500px]">
      <div className="w-full max-w-4xl border rounded-lg shadow-md p-6 bg-white dark:bg-black">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          Clipped Shape Gallery Demo
        </h2>

        <div className="mb-8">
          <ClippedShapeGallery mediaItems={customMediaItems} />
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <h3 className="text-lg font-semibold mb-4 text-center">Default Items</h3>
          <ClippedShapeGallery />
        </div>
      </div>
    </div>
  );
};

export { ClippedShapeGalleryDemo as DemoOne };
